import React, { useState, useEffect, useRef } from "react";

export default function CustomDropdown({ selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const options = ["(All)", "New", "Assigned", "Fixed", "Closed"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function handleKeyDown(event) {
    event.preventDefault();
    if (event.key === "Enter" || event.key === " ") {
      console.log("key clicked");
      setIsOpen((prev) => !prev);
    }
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex justify-between items-center w-full bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-slate-100 transition"
      >
        {selectedValue || "(All)"}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute left-0 w-full mt-2 bg-white text-black rounded-md shadow-lg overflow-hidden"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={
                selectedValue === option ||
                (option === "(All)" && !selectedValue)
              }
              tabIndex={0}
              className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white transition"
              onClick={() => {
                onSelect(option === "(All)" ? "" : option);
                setIsOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onSelect(option === "(All)" ? "" : option);
                  setIsOpen(false);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
