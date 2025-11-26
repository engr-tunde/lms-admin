import ProgressBar from "../../components/globals/ProgressBar";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import { fetchCategories } from "../../api"
import { FaCheck } from "react-icons/fa";
import CourseCreate from "../../components/courses/course-create";


const DashboardCourseCreatePage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [stepCompleted, setStepCompleted] = useState({
    overview: true,
    materials: true,
    settings: true,
    price: true,
    publish: true
  })

  const { categories } = fetchCategories();

  const tabs = [
    { id: 'overview', label: 'Course Overview', step: 1, completed: stepCompleted.overview },
    { id: 'materials', label: 'Course Materials', step: 2, completed: stepCompleted.materials },
    { id: 'settings', label: 'Requirements & Audience', step: 3, completed: stepCompleted.settings },
    { id: 'publish', label: 'Publish', step: 5, completed: stepCompleted.publish }
  ];

  const progressValue = (tabs.findIndex(tab => tab.id === activeTab) / (tabs.length - 1)) * 100;

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Create Course"
        subtitle="Choose the type of content you want to create"
      />
      <div className="flex gap-20 items-center border-t-[1px] border-merseBorder/50">
        {tabs.map((tab) => (
          <button 
            onClick={() => setActiveTab(tab.id)}
            disabled={tab.id !== activeTab && !stepCompleted[tab.id]}
            className={`relative pb-4 pt-6 ${
                activeTab === tab.id ? "text-black" : "text-merseBorder disabled:opacity-50 disabled:cursor-not-allowed"
            }`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                    ${tab.completed ? "bg-green-600 text-white" : 
                      activeTab === tab.id ? 
                      "bg-black text-white" : "bg-merseBorder text-gray-600"}
                    `}
                >
                  {tab.completed ? <FaCheck className="w-3 h-3" /> : tab.step}
                </div>
                <span className={`font-semibold transition-colors ${
                  activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
                )}
              </div>
          </button>
        ))}
      </div>
      <div className="relative w-full flex flex-col gap-8 bg-gray-50 mx-auto p-10">
        <ProgressBar 
          value={progressValue}
          rounded={0}
          className="absolute -top-2 left-0 right-0"
        />
        <CourseCreate 
          activeTab={activeTab} 
          categories={categories?.data} 
          setActiveTab={setActiveTab}
          stepCompleted={stepCompleted}
          setStepCompleted={setStepCompleted}
        />
      </div>
    </div>
  )
}

export default DashboardCourseCreatePage;






