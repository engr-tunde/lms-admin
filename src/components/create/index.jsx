import CategorySettingsTable from "../settings/settings-category";
import CollectionsSettingsTable from "../settings/settings-collections";
import SubcategorySettingsTable from "../settings/settings-subcategory";
import CourseCurriculumCard from "./CourseCurriculumCard";
import CourseOverviewCard from "./CourseOverviewCard";

const CourseCreatePage = ({ activeTab}) => {
  switch (activeTab) {
    case "courseOverview":
      return <CourseOverviewCard />;
    case "courseCurriculum":
      return <CourseCurriculumCard />;
    case "courseMaterials":
      return <SubcategorySettingsTable />;
    case "publish":
      return <CollectionsSettingsTable />;
    default:
      return null;
  }
}


export default CourseCreatePage