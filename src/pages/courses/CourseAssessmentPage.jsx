import ProgressBar from "../../components/globals/ProgressBar";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CourseAssessment from "../../components/courses/course-assessment";

const DashboardCourseAssessmentPage = () => {
  const [activeTab, setActiveTab] = useState("settings")
  const [stepCompleted, setStepCompleted] = useState({
    settings: true,
    questions: true,
    publish: true,
  })

  const tabs = [
    { id: 'settings', label: 'Assessment Settings', step: 1, completed: stepCompleted.settings },
    { id: 'questions', label: 'Assessment Questions', step: 2, completed: stepCompleted.questions },
    { id: 'publish', label: 'Preview & Publish', step: 3, completed: stepCompleted.publish }
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600" />
                )}
              </div>
          </button>
        ))}
      </div>
      
      <div className="relative w-full flex flex-col gap-8 bg-gray-50 mx-auto p-10">
        <ProgressBar 
          value={progressValue}
          rounded={0}
          className="absolute top-0 left-0 right-0"
        />
        <CourseAssessment activeTab={activeTab} />
      </div>
    </div>
  )
}

export default DashboardCourseAssessmentPage;