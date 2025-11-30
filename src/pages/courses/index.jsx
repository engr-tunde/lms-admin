import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { Archive, File, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardStats from "../../components/globals/DashboardStats.jsx";
import { BookIcon, CheckIcon } from "../../components/globals/Icons.jsx";
import ManageCourses from "../../components/courses/course-list/index.jsx";

function DashboardCoursesPage() {

  const courseStats = [
    { label: "Total Courses", value: "48", icon: BookIcon, color: "blue" },
    { label: "Published", value: "32", icon: CheckIcon, color: "emerald" },
    { label: "Drafts", value: "10", icon: File, color: "gray" },
    { label: "Archived", value: "6", icon: Archive, color: "amber" },
  ];

  
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
        <DashboardStats 
          stats={courseStats} 
        />
        <ManageCourses />
      </div>
    </div>
  );
}

export default DashboardCoursesPage;