import { useEffect, useState } from "react";
import Pagination from "../../globals/Pagination";
import CourseListTable from "./CourseListTable"
import { NoCourseCreated } from "../../globals/NoValuesPage"
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";  

const ManageCourses = ({ courses, coursesLoading, coursesError }) => {
  const [activeTab, setActiveTab ] = useState("courses")
  const [filteredData, setFilteredData] = useState();
  const [originalArr, setOriginalArr] = useState();

  console.log("Courses Data:", courses);

  const tabs = [
    { id: 'courses', label: 'Courses'},
    { id: 'courseBundles', label: 'Course Bundles'},
  ];

  useEffect(() => {
    if (courses?.data?.courses?.length) {
      setOriginalArr(courses?.data?.courses);
      setFilteredData(courses?.data?.courses);
    }
  }, [courses?.data?.courses]);
  
  console.log("Filtered Data:", filteredData);

  if (coursesLoading) return <Loader />
  if (coursesError) return <ErrorWidget />

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
        {filteredData ?(
          <>
            <CourseListTable
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              originalArr={originalArr}
              setOriginalArr={setOriginalArr}
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