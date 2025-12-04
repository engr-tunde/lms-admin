import ProgressBar from "../../components/globals/ProgressBar";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useEffect, useState } from "react";
import { fetchCategories, fetchAllCourses } from "../../api"
import CourseCreate from "../../components/courses/course-create";
import { Check } from "lucide-react";
import { useParams } from "react-router-dom";


const DashboardCourseCreatePage = () => {
  const { id } = useParams();
  const [courseId, setCourseId] = useState(id || null);
  const [course, setCourse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const { courses } = fetchAllCourses();
  const { categories: fetchedCategories } = fetchCategories();

  const STEP_ORDER = ["overview", "materials", "requirements", "pricing", "publish"];

  useEffect(() => {
    if (!courseId) return;
    const found = courses?.data?.courses?.find((c) => c._id === courseId);
    if (found) setCourse(found);
  }, [courseId, courses]);

  useEffect(() => {
    if (fetchedCategories?.data) {
      setCategories(fetchedCategories.data);
    }
  }, [fetchedCategories]);

  useEffect(() => {
    if (!course) {
      setActiveTab("overview");
      return;
    }
  
    const completed = course.progress_status || "overview";
    const completedIndex = STEP_ORDER.indexOf(completed);
  
    const nextIndex = completedIndex + 1;
  
    const nextStep =
      nextIndex < STEP_ORDER.length ? STEP_ORDER[nextIndex] : completed;
  
    setActiveTab(nextStep);
  }, [course]);



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
      <div className="flex gap-20 items-center border-t-[1px] border-merseBorder/50">
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
                  ${tab.completed ? "bg-green-600 text-white" : 
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
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600" />
              )}
            </div>
          </button>
        ))}
      </div>
      <div className="relative w-full flex flex-col gap-8 bg-gray-50 mx-auto p-6">
        <ProgressBar 
          value={progressValue}
          rounded={0}
          className="absolute -top-2 left-0 right-0"
        />
        <CourseCreate 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          categories={categories} 
          courseId={courseId}
          setCourseId={setCourseId}
          course={course}
        />
      </div>
    </div>
  )
}

export default DashboardCourseCreatePage;






