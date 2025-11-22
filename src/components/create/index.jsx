import CourseCurriculumCard from "./course-curriculum-card";
import CoursePublishCard from "./course-publish-card";
import CourseSettings from "./course-requirements-card";
import CourseOverviewCard from "./CourseOverviewCard";

const CourseCreatePage = ({ 
  activeTab, 
  categories, 
  setActiveTab, 
  stepCompleted, 
  setStepCompleted 
}) => {
  switch (activeTab) {
    case "overview":
      return <CourseOverviewCard 
               categories={categories} 
               stepCompleted={stepCompleted} 
               setStepCompleted={setStepCompleted} 
               setActiveTab={setActiveTab}
             />;
    case "materials":
      return <CourseCurriculumCard />;
    case "settings":
      return <CourseSettings />;
    // case "price":
    //   return <CoursePriceCard />;
    case "publish":
      return <CoursePublishCard />;
    default:
      return null;
  }
}


export default CourseCreatePage