import ProgressBar from "../../components/globals/ProgressBar";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useEffect, useState } from "react";
import CourseCreate from "../../components/courses/course-create";
import { Check } from "lucide-react";
import { useLocation } from "react-router-dom";


const DashboardCourseCreatePage = () => {
  const location = useLocation();
  const [course, setCourse] = useState(null);
  const courseFromLocation = location.state?.course || null;
  const [activeTab, setActiveTab] = useState(location.state?.nextLabel || "overview");
  
  const STEP_ORDER = ["overview", "materials", "requirements", "pricing", "publish"];

  useEffect(() => {
    if (courseFromLocation) {
      setCourse(courseFromLocation);
    }
  }, [courseFromLocation]);

  const stepCompleted = STEP_ORDER.reduce((acc, step) => {
    acc[step] =
      STEP_ORDER.indexOf(step) <= STEP_ORDER.indexOf(course?.progress_status);
    return acc;
  }, {});

  const tabs = [
    { id: 'overview', label: 'Course Overview', step: 1},
    { id: 'materials', label: 'Course Materials', step: 2},
    { id: 'requirements', label: 'Requirements & Audience', step: 3},
    { id: 'pricing', label: 'Pricing', step: 4},
    { id: 'publish', label: 'Publish', step: 5}
  ].map((t) => ({
    ...t,
    completed: stepCompleted[t.id],
  }));;

  const canClick = (tabId) => {
    const completedIndex = STEP_ORDER.indexOf(course?.progress_status);
    const tabIndex = STEP_ORDER.indexOf(tabId);
  
    return tabIndex <= completedIndex + 1;
  };
  

  const progressValue = (tabs.findIndex(tab => tab.id === activeTab) / (tabs.length - 1)) * 100;

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Create Course"
        subtitle="Choose the type of content you want to create"
      />
      <div className="w-full border-t-[1px] border-merseBorder/50 flex flex-col gap-2">
        <div className="flex gap-10 items-center">
          {tabs.map((tab) => (
            <button 
              onClick={() => setActiveTab(tab.id)}
              disabled={!canClick(tab.id)}
              className={`relative pb-4 pt-6 ${
                  activeTab === tab.id ? "text-black" : "text-merseBorder disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                    ${tab.completed ? "bg-purple-600 text-white" : 
                      activeTab === tab.id ? 
                      "bg-black text-white" : "bg-merseBorder text-gray-600"}
                    `}
                >
                  {tab.completed ? <Check className="w-5 h-5" /> : tab.step}
                </div>
                <span className={`font-semibold transition-colors ${
                  activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <div 
                    className={`absolute bottom-2 left-0 right-0 h-1 ${tab.completed ? "bg-purple-600" : "bg-black"}`} 
                  />
                )}
              </div>
            </button>
          ))}
        </div>
        <ProgressBar 
          value={progressValue}
          rounded={0}
          className="w-full"
        />
      </div>
      <div className="relative w-full flex flex-col gap-8 bg-gray-50 mx-auto p-6">
        <CourseCreate 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          course={course}
        />
      </div>
    </div>
  )
}

export default DashboardCourseCreatePage;






