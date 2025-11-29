import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import CourseBundlesList from "../../components/courses/course-bundles-list/index.jsx";
import CourseListTable from "../../components/courses/course-list/index.jsx";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

function DashboardCoursesPage() {
  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Courses"
          subtitle="Manage your courses and content here"
        />
        <Link 
          to="/courses/create"
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4 text-white" />
          <span>
            Create New Course
          </span>
        </Link>
      </div>
      <div className="min-h-screen bg-gray-50 p-6"> 
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <CourseListTable />
        </div>
      </div>
    </div>
  );
}

export default DashboardCoursesPage;