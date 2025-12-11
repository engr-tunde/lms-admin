import { useState } from "react";

function StatusFilter({ originalArr, setFilteredData, filterArr = [], filterKey = "status" }) {
  const [filterValue, setFilterValue] = useState("all");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);

    if (value === "all") {
      setFilteredData(originalArr);
      return;
    }

    const filteredList = originalArr.filter(
      (item) => item[filterKey] === value
    );

    setFilteredData(filteredList);
  };

  return (
    <div className="w-full max-w-xs">
      <select
        value={filterValue}
        onChange={handleFilter}
        className="w-full h-full text-sm border border-merseBorder focus:outline-purple-600 p-3 rounded-lg bg-transparent"
      >
        {filterArr.map((item, i) => (
          <option key={i} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}


export default StatusFilter;