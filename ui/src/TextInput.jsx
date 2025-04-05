import React, { useState } from "react";

export default function TextInput({
  id,
  value,
  onChange,
  tag,
  name,
  size,
  rows,
  cols,
}) {
  function format(text) {
    return text ?? ""; // Ensures UI never displays null
  }

  function unformat(text) {
    return text.trim() === "" ? null : text; // Convert empty string to null
  }

  const [inputValue, setInputValue] = useState(format(value));

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleBlur(e) {
    onChange(e, unformat(inputValue)); // Ensure null is sent on blur
  }

  return React.createElement(tag || "input", {
    value: inputValue, // Controlled input: always a string
    onChange: handleChange,
    onBlur: handleBlur,
    key: id,
    name,
    size,
    rows,
    cols,
    className: "bg-white text-black px-4 py-2 rounded-md shadow-md w-full",
  });
}
