import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import CourseBundlesList from "../../components/courses/course-bundles-list/index.jsx";
import CourseListTable from "../../components/courses/course-list/index.jsx";

function DashboardCoursesPage() {
  const [activeTab, setActiveTab] = useState("courses")
  
  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Courses List"
      />
      <div className="flex gap-3">
        <button 
          onClick={() => setActiveTab("courses")}
          className={`pr-3 py-1 rounded ${
              activeTab === "courses" ? "text-black" : "text-merseBorder"
          }`}
          >
            Courses
        </button>
        <button 
          onClick={() => setActiveTab("courseBundles")}
          className={`pr-3 py-1 rounded ${
              activeTab === "courseBundles" ? "text-black" : "text-merseBorder"
          }`}
          >
            Course Bundles
        </button>
      </div>
      <div className="w-full flex flex-col gap-8">
        {renderActivePage(activeTab)}
      </div>
    </div>
  );
}


const renderActivePage = (activeTab) => {
  switch (activeTab) {
    case "courses":
      return <CourseListTable />;
    case "courseBundles":
      return <CourseBundlesList />;
    default:
      return null;
  }
};


export default DashboardCoursesPage;