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
  const [course, setCourse] = useState();
  const [category, setCategory] = useState();
  const [activeTab, setActiveTab] = useState("overview")
  const [stepCompleted, setStepCompleted] = useState({
    overview: false,
    materials: false,
    settings: false,
    publish: false
  })
  const { courses } = fetchAllCourses();
  const { categories } = fetchCategories();

  useEffect(() => {
    if (!courseId) return;
    setCourse(courses?.data?.courses?.find((c) => c._id === courseId));
  }, [courseId, courses]);

  useEffect(() => {
      setCategory(categories?.data);
  }, [categories]);

  useEffect(() => {
    const completed = {
      overview: Boolean(courseId),                       
      materials: Boolean(course?.materials?.length),
      settings: Boolean(course?.requirements?.length),
      publish: course?.status === "published",
    };
    setStepCompleted(completed);

    const nextStep = Object.keys(completed).find((k) => !completed[k]) || "publish";
    setActiveTab(nextStep);
  }, [course, courseId]);


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
          categories={category} 
          setActiveTab={setActiveTab}
          stepCompleted={stepCompleted}
          setStepCompleted={setStepCompleted}
          courseId={courseId}
          setCourseId={setCourseId}
          course={course}
        />
      </div>
    </div>
  )
}

export default DashboardCourseCreatePage;






