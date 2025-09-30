import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const TableSearch = ({ originalArr, filteredData, setfilteredData }) => {
  const [searchQuery, setsearchQuery] = useState("");

  const handleFilter = (e) => {
    const query = e.target.value;
    setsearchQuery(query);
    const searchList = originalArr.filter((item) => {
      console.log("item fullName", item.email);
      return item.email.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setfilteredData(searchList);
  };

  return (
    <div className="h-max w-full md:w-auto flex items-center gap-2 text-xs ring-[1.5px] ring-gray-300 px-2">
      <FaSearch className="" />
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
