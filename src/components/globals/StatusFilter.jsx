function StatusFilter({ filter, setFilter, filterArr = [] }) {
  return (
    <div className="w-full max-w-xs">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
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
