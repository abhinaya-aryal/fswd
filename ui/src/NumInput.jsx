import React, { useState } from "react";

export default function NumInput({ name, value, onChange, id }) {
  function format(num) {
    return num != null ? num.toString() : "";
  }

  function unformat(str) {
    const val = parseInt(str, 10);
    return Number.isNaN(val) ? null : val;
  }

  const [inputValue, setInputValue] = useState(format(value));

  function changeValue(e) {
    if (e.target.value.match(/^\d*$/)) {
      setInputValue(e.target.value);
    }
  }

  function onBlur(e) {
    onChange(e, unformat(inputValue));
  }

  return (
    <input
      key={id}
      name={name}
      type="text"
      value={inputValue}
      onBlur={onBlur}
      onChange={changeValue}
      className="bg-white text-black px-4 py-2 rounded-md shadow-md w-full"
    />
  );
}
