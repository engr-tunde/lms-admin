import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { coursesColumnHeader, coursesData } from "../../../data/contentsData";
import CourseListRowTemplate from "./CourseListRowTemplate";
import StatusFilter from "../../globals/StatusFilter";
import { useState } from "react";
import Pagination from "../../globals/Pagination";
import CourseListTable from "./CourseListTable"
import { NoCourseCreated } from "../../globals/NoValuesPage"

const ManageCourses = () => {
  const [activeTab, setActiveTab ] = useState("courses")
  const [filterStatus, setFilterStatus] = useState('all');

  const tabs = [
    { id: 'courses', label: 'Courses'},
    { id: 'courseBundles', label: 'Course Bundles'},
  ];

  const filteredCourses = coursesData.filter(course => {
    if (filterStatus !== 'all' && course.status !== filterStatus) return false;
    return true;
  });

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
        {filteredCourses.length ?(
          <>
            <CourseListTable
              filteredCourses={filteredCourses}
              coursesColumnHeader={coursesColumnHeader}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
            <Pagination />
          </>
          ) : <NoCourseCreated />
          }
      </div>
    </div>
  )
}

export default ManageCourses;