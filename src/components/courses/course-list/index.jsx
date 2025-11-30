import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { coursesColumnHeader, coursesData } from "../../../data/contentsData";
import CourseListRowTemplate from "./CourseListRowTemplate";
import StatusFilter from "../../globals/StatusFilter";
import { useState } from "react";
import Pagination from "../../globals/Pagination";
import CourseListTable from "./CourseListTable"

const ManageCourses = () => {
  const [activeTab, setActiveTab ] = useState("courses")

  const tabs = [
      { id: 'courses', label: 'Courses'},
      { id: 'courseBundles', label: 'Course Bundles'},
    ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="border-b border-gray-200">
        <div className="flex gap-8 px-6">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 border-b-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
        <CourseListTable/>
        <Pagination />
      </div>
    </div>
  )
}

export default ManageCourses;