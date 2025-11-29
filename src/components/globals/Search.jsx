import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SearchIcon } from "./Icons";

const Search = ({ onSearch }) => {
  const [searchBy, setSearchBy] = useState("");
  
  const handleChange = (e) => {
    const val = e.target.value;
    setSearchBy(val);
    onSearch(val); 
  };

  return (
    <div 
      className="h-max w-full md:w-auto flex items-center gap-2 text-xs ring-[1.5px] ring-gray-300 px-2 rounded-lg focus-within:ring-purple-500 focus-within:ring-2 transition-all"
    >
      <SearchIcon className="w-4 h-4 text-merseBorder" />
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
