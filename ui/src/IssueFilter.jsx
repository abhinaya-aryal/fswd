import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import CustomDropdown from "./components/CustomDropDown.jsx";

export default function IssueFilter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    status: searchParams.get("status") || "",
    effortMin: searchParams.get("effortMin") || "",
    effortMax: searchParams.get("effortMax") || "",
  });
  const [changed, setChanged] = useState(false);

  const [isOpen, setIsOpen] = useState(
    !!(filter.status || filter.effortMin || filter.effortMax),
  );

  useEffect(() => {
    setFilter({
      status: searchParams.get("status") || "",
      effortMin: searchParams.get("effortMin") || "",
      effortMax: searchParams.get("effortMax") || "",
    });
    setChanged(false);
  }, [searchParams]);

  function onChangeStatus(option) {
    setFilter((prevFilter) => ({ ...prevFilter, status: option }));
    setChanged(true);
  }

  function onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      setFilter((prevFilter) => ({ ...prevFilter, effortMin: e.target.value }));
      setChanged(true);
    }
  }

  function onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      setFilter((prevFilter) => ({ ...prevFilter, effortMax: e.target.value }));
      setChanged(true);
    }
  }

  function applyFilter() {
    const params = new URLSearchParams();
    if (filter.status) params.set("status", filter.status);
    if (filter.effortMin) params.set("effortMin", filter.effortMin);
    if (filter.effortMax) params.set("effortMax", filter.effortMax);
    navigate({
      pathname: "/issues",
      search: params.toString(),
    });
  }

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg my-12">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-900 text-white font-semibold px-6 py-3 ${isOpen ? "rounded-t-lg" : "rounded-lg"} focus:outline-none`}
      >
        <span className="flex items-center gap-2">
          <FaFilter /> Filter Issues
        </span>
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
            strokeWidth={4}
            d="M19 9l-9 9-9-9"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="p-6 bg-slate-200 border-x-2 border-b-2 border-blue-500 rounded-b-lg ">
          <div className="gap-8 grid grid-cols-3 items-end">
            <div className="w-full">
              <span className="block mb-2 font-semibold">Status:</span>
              <CustomDropdown
                selectedValue={filter.status}
                onSelect={onChangeStatus}
              />
            </div>
            <div className="w-full">
              <span className="block mb-2 font-semibold">Effort between:</span>
              <div className="flex gap-2 items-center">
                <input
                  value={filter.effortMin}
                  onChange={onChangeEffortMin}
                  className="bg-white text-black px-4 py-2 rounded-md shadow-md col-span-1 w-full"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  value={filter.effortMax}
                  onChange={onChangeEffortMax}
                  className="bg-white text-black px-4 py-2 rounded-md shadow-md col-span-1 w-full"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="flex gap-4  h-max items-center">
              <button
                type="button"
                onClick={applyFilter}
                className="bg-blue-600 text-white px-16 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Apply
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-16 py-3 rounded-md font-semibold shadow-md disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed hover:bg-gray-600 transition"
                onClick={() => {
                  setFilter({
                    status: searchParams.get("status") || "",
                    effortMin: searchParams.get("effortMin") || "",
                    effortMax: searchParams.get("effortMax") || "",
                  });
                  setChanged(false);
                }}
                disabled={!changed}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
