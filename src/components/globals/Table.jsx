import React from "react";

const Table = ({ columns = [], renderRow, data = [] }) => {
  return (
    <table className="w-full mt-4 h-[200px] overflow-y-scroll overflow-x-scroll border-merseBorder border rounded">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr className="text-left">
          {columns.map((col, i) => (
            <th key={i} className={`${col.className} py-4 px-6 text-left text-sm font-semibold `}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-20">
        {data?.map((item, i) => renderRow(item, i))}
      </tbody>
    </table>
  );
};

export default Table;
