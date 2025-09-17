import React from "react";

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4 h-[200px] overflow-y-scroll overflow-x-scroll border-merseBorder">
      <thead className="py-10 border-3">
        <tr className="text-left">
          {columns.map((col, i) => (
            <th key={i} className={`${col.className} py-3 bg-merseBorder/10`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-20">
        {data.map((item, i) => renderRow(item, i))}
      </tbody>
    </table>
  );
};

export default Table;
