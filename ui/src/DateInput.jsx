import React, { useState } from "react";

export default function DateInput({
  name,
  value,
  onValidityChange,
  onChange,
  id,
}) {
  function editFormat(date) {
    return date != null ? date.toISOString().substr(0, 10) : "";
  }

  function unformat(str) {
    const val = new Date(str);
    return Number.isNaN(val.getTime()) ? null : val;
  }

  function displayFormat(date) {
    return date != null ? date.toDateString() : "";
  }

  const [inputValue, setInputValue] = useState(editFormat(value));
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);

  function onFocus() {
    setFocused(true);
  }

  function onBlur(e) {
    const dateValue = unformat(inputValue);
    const isValid = inputValue === "" || dateValue != null;
    if (isValid !== valid && onValidityChange) {
      onValidityChange(e, isValid);
    }
    setValid(isValid);
    setFocused(false);
    if (isValid) onChange(e, dateValue);
  }

  function changeValue(e) {
    if (e.target.value.match(/^[\d-]*$/)) {
      setInputValue(e.target.value);
    }
  }

  const className = !valid && !focused ? "invalid" : null;
  const displayValue = focused ? inputValue : displayFormat(value);

  return (
    <input
      key={id}
      type="text"
      size={20}
      name={name}
      className={className}
      value={displayValue}
      placeholder={focused ? "yyyy-mm-dd" : null}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={changeValue}
    />
  );
}
