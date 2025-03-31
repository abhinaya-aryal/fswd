// import React, { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import CustomDropdown from "./components/CustomDropDown.jsx";
//
// export default function IssueFilter() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [filter, setFilter] = useState({
//     status: searchParams.get("status") || "",
//     effortMin: searchParams.get("effortMin") || "",
//     effortMax: searchParams.get("effortMax") || "",
//   });
//   const [changed, setChanged] = useState(false);
//
//   useEffect(() => {
//     setFilter({
//       status: searchParams.get("status") || "",
//       effortMin: searchParams.get("effortMin") || "",
//       effortMax: searchParams.get("effortMax") || "",
//     });
//     setChanged(false);
//   }, [searchParams]);
//
//   function onChangeStatus(option) {
//     setFilter((prevFilter) => ({ ...prevFilter, status: option }));
//     setChanged(true);
//   }
//
//   function onChangeEffortMin(e) {
//     const effortString = e.target.value;
//     if (effortString.match(/^\d*$/)) {
//       setFilter((prevFilter) => ({ ...prevFilter, effortMin: e.target.value }));
//       setChanged(true);
//     }
//   }
//
//   function onChangeEffortMax(e) {
//     const effortString = e.target.value;
//     if (effortString.match(/^\d*$/)) {
//       setFilter((prevFilter) => ({ ...prevFilter, effortMax: e.target.value }));
//       setChanged(true);
//     }
//   }
//
//   function applyFilter() {
//     const params = new URLSearchParams();
//     if (filter.status) params.set("status", filter.status);
//     if (filter.effortMin) params.set("effortMin", filter.effortMin);
//     if (filter.effortMax) params.set("effortMax", filter.effortMax);
//     navigate({
//       pathname: "/issues",
//       search: params.toString(),
//     });
//   }
//
//   return (
//     <div className="my-8 max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg  bg-gradient-to-r from-purple-900 to-blue-500 text-white">
//       <div className="flex flex-wrap items-center gap-4">
//         <div className="flex items-center gap-2">
//           <span className="text-white font-semibold">Status:</span>
//           <CustomDropdown
//             selectedValue={filter.status}
//             onSelect={onChangeStatus}
//           />
//           {/* <select
//             id="status"
//             value={filter.status}
//             onChange={onChangeStatus}
//             className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
//           >
//             <option className="bg-blue-500 p-2" value="">
//               (All)
//             </option>
//             <option className="bg-blue-500 p-2" value="NEW">
//               New
//             </option>
//             <option className="bg-blue-500 p-2" value="ASSIGNED">
//               Assigned
//             </option>
//             <option className="bg-blue-500 p-2" value="FIXED">
//               Fixed
//             </option>
//             <option className="bg-blue-500 p-2" value="CLOSED">
//               Closed
//             </option>
//           </select> */}
//         </div>
//
//         {/* Effort Input Fields */}
//         <div className="flex items-center gap-2">
//           <span className="text-white font-semibold">Effort between:</span>
//           <input
//             id="effortMin"
//             size={5}
//             value={filter.effortMin}
//             onChange={onChangeEffortMin}
//             className="border border-gray-300 rounded-md px-4 py-1 text-center w-16 focus:ring-2 focus:ring-blue-400"
//             placeholder="Min"
//           />
//           <span className="text-white">-</span>
//           <input
//             id="effortMax"
//             size={5}
//             value={filter.effortMax}
//             onChange={onChangeEffortMax}
//             className="border border-gray-300 rounded-md px-4 py-1 text-center w-16 focus:ring-2 focus:ring-blue-400"
//             placeholder="Max"
//           />
//         </div>
//
//         {/* Buttons */}
//         <div className="flex gap-2">
//           <button
//             type="button"
//             onClick={applyFilter}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 transition"
//           >
//             Apply
//           </button>
//           <button
//             type="button"
//             className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold shadow-md disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed hover:bg-gray-600 transition"
//             onClick={() => {
//               setFilter({
//                 status: searchParams.get("status") || "",
//                 effortMin: searchParams.get("effortMin") || "",
//                 effortMax: searchParams.get("effortMax") || "",
//               });
//               setChanged(false);
//             }}
//             disabled={!changed}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
        <div className="p-6 bg-slate-200 border-x-2 border-b-2 border-blue-500 rounded-b-lg">
          <div className="flex justify-around gap-4">
            <div className="flex items-center gap-2">
              <span>Status:</span>
              <CustomDropdown
                selectedValue={filter.status}
                onSelect={onChangeStatus}
              />
            </div>

            <div className="flex items-center gap-2">
              <span>Effort between:</span>
              <input
                size={5}
                value={filter.effortMin}
                onChange={onChangeEffortMin}
                className="bg-white text-black px-4 py-2 rounded-md shadow-md"
                placeholder="Min"
              />
              <span>-</span>
              <input
                size={5}
                value={filter.effortMax}
                onChange={onChangeEffortMax}
                className="bg-white text-black px-4 py-2 rounded-md shadow-md"
                placeholder="Max"
              />
            </div>

            <div className="flex gap-8">
              <button
                type="button"
                onClick={applyFilter}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Apply
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold shadow-md disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed hover:bg-gray-600 transition"
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
