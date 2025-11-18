import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { coursesData } from "../../../data/contentsData";
import CourseListRowTemplate from "./CourseListRowTemplate";
import ProgressBar from "../../globals/ProgressBar";
import { Link } from "react-router-dom";

const CourseListTable = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between gap-4">
        <div className="flex items-center cursor-pointer">
          <TableSearch
          />
        </div>
        <Link
          to="/"
          className="text-white bg-black px-3 py-2 cursor-pointer"
        >
          Create New Course
        </Link>
      </div>
      <Table
        renderRow={(item) => (
          <CourseListRowTemplate
            key={item?.id}
            item={item}
          />
        )}
        data={coursesData}
      />
    </div>
  )
}

export default CourseListTable;