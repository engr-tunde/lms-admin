import CourseCurriculumCard from "./course-curriculum-card";
import CoursePublishCard from "./course-publish-card";
import CourseOverviewCard from "./CourseOverviewCard";
import CoursePriceCard from "./CoursePriceCard";

const CourseCreatePage = ({ activeTab}) => {
  switch (activeTab) {
    case "courseOverview":
      return <CourseOverviewCard />;
    case "courseMaterials":
      return <CourseCurriculumCard />;
    case "price":
      return <CoursePriceCard />;
    case "publish":
      return <CoursePublishCard />;
    default:
      return null;
  }
}


export default CourseCreatePage