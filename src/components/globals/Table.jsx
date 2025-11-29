
const Table = ({ columns = [], renderRow, data = [] }) => {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr className="">
            {columns.map((col, i) => (
              <th key={i} className={`${col.className} px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mt-20">
          {data?.map((item, i) => renderRow(item, i))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
