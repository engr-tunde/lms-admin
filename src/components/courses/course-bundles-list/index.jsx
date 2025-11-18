import TableSearch from "../../globals/TableSearch";

const CourseBundlesList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
          <TableSearch
          />
        </div>
        <button
          className="text-white bg-black px-3 py-2 cursor-pointer"
          // onClick={() => setShowCreateBrandModal(true)}
        >
          Bundle Courses
        </button>
      </div>
    </div>
  )
}

export default CourseBundlesList;