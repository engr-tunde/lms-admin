import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchIcon } from "./Icons";

const TableSearch = ({ originalArr, filteredData, setFilteredData, searchable }) => {
  const [searchQuery, setsearchQuery] = useState("");

  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    setsearchQuery(query);

    if (!query.trim()) {
      setfilteredData(originalArr);
      return;
    }

    const searchList = originalArr.filter((item) => {
      const searchableText = searchable
        .map((field) => {
          const keys = field.split(".");
          let value = item;

          // traverse nested fields
          for (const key of keys) {
            if (Array.isArray(value)) {
              // if it's an array, flatten and extract the next key from each element
              value = value.map((v) => v?.[key]);
            } else {
              value = value?.[key];
            }
          }

          // flatten arrays to string
          if (Array.isArray(value)) {
            return value
              .filter(Boolean)
              .map((v) =>
                typeof v === "object"
                  ? JSON.stringify(v).replace(/_/g, " ").toLowerCase()
                  : v.toString().replace(/_/g, " ").toLowerCase()
              )
              .join(" ");
          }

          return (value ?? "").toString().replace(/_/g, " ").toLowerCase();
        })
        .join(" ");

      return searchableText.includes(query);
    });

    setfilteredData(searchList);
  };

  return (
    <div className="h-max w-full md:w-auto flex items-center gap-2 text-xs ring-[1.5px] ring-gray-300 px-2 rounded-lg focus-within:ring-purple-500 focus-within:ring-2 transition-all">
      <SearchIcon className="w-4 h-4 text-merseBorder" />
      <input
        value={searchQuery}
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none h-[37px]"
        onChange={handleFilter}
        style={{ border: "0px", outline: "none" }}
      />
    </div>
  );
};

export default TableSearch;
