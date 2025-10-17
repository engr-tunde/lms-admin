import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
  const [searchBy, setSearchBy] = useState("");
  
  const handleChange = (e) => {
    const val = e.target.value;
    setSearchBy(val);
    onSearch(val); // inform parent immediately
  };

  // useEffect(() => {
  //   const baseData =
  //     filteredData?.length < originalArr?.length ? filteredData : originalArr;

  //   // merged filterData logic
  //   const results = (() => {
  //     if (!searchBy) return baseData;

  //     if (!searchBy) {
  //       setfilteredData(baseData);
  //       return;
  //     }
  //     const query = searchBy.toLowerCase();

  //     return baseData.filter((item) =>
  //       searchable.some((field) => {
  //         const keys = field.split(".");
  //         let value = item;

  //         for (const key of keys) {
  //           if (Array.isArray(value)) {
  //             const arrayMatch = value.some((v) => {
  //               const nested = v?.[key];
  //               if (typeof nested === "string") {
  //                 return nested.toLowerCase().includes(query);
  //               }
  //               return false;
  //             });
  //             if (arrayMatch) return true;
  //             value = undefined;
  //             break;
  //           } else if (value && typeof value === "object") {
  //             value = value[key];
  //           } else {
  //             value = undefined;
  //             break;
  //           }
  //         }

  //         if (typeof value === "string") {
  //           return value.toLowerCase().includes(query);
  //         }

  //         if (Array.isArray(value)) {
  //           return value.some(
  //             (v) => typeof v === "string" && v.toLowerCase().includes(query)
  //           );
  //         }

  //         return false;
  //       })
  //     );
  //   })();

  //   setfilteredData(results);
  // }, [searchBy, filteredData, originalArr, searchable, setfilteredData]);

  return (
    <div className="h-max w-full md:w-auto flex items-center gap-2 text-xs ring-[1.5px] ring-gray-300 px-2">
      <FaSearch />
      <input
        type="text"
        placeholder="Search..."
        value={searchBy}
        onChange={handleChange}
        className="w-[200px] p-2 bg-transparent outline-none h-[37px]"
      />
    </div>
  );
};

export default Search;
