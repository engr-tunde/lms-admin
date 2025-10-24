function ProductStatusFilter({ filter, setFilter }) {
  const filterArr = [
    {
      title: "All Products",
      value: "",
    },
    {
      title: "Awaiting approval",
      value: "pending",
    },
    {
      title: "Approved",
      value: "approved",
    },
    {
      title: "Rejected",
      value: "rejected",
    },
  ];
  return (
    <div className="flex gap-6">
      {filterArr.map((ele, i) => (
        <button
          key={i}
          onClick={() => setFilter(ele.value)}
          className={`px-3 py-1 rounded ${
            filter === ele.value ? "text-black" : "text-merseBorder"
          }`}
        >
          {ele.title}
        </button>
      ))}
    </div>
  );
}

export default ProductStatusFilter;
