import { useParams } from "react-router-dom";
import CreateMaterials from "./create-materials";
import CreatePrice from "./create-price";
import CreateRequirements from "./create-requirements";
import CreateOverview from "./CreateOverview";
import CoursePublish from "./course-publish";

const STEP_ORDER = ["overview", "materials", "requirements", "pricing", "completed"];

const CourseCreate = ({ 
  activeTab, 
  setActiveTab, 
  course
}) => {

  console.log("course in CourseCreate", course)

  const goToNextStep = (current) => {
    const currentIndex = STEP_ORDER.indexOf(current);
    const next = STEP_ORDER[currentIndex + 1];
    if (next) setActiveTab(next);
  };
  
  switch (activeTab) {
    case "overview":
      return (
        <CreateOverview 
          onStepComplete={() => goToNextStep(activeTab)}
          course={course}
        />
      );
    case "materials":
      return (
        <CreateMaterials 
          onStepComplete={() => goToNextStep(activeTab)}
          setActiveTab={setActiveTab}
          course={course}
        />
      );
    case "requirements":
      return (
        <CreateRequirements 
          onStepComplete={() => goToNextStep(activeTab)}
          setActiveTab={setActiveTab}
          course={course}
        />
      );
    case "pricing":
      return (
        <CreatePrice 
          onStepComplete={() => goToNextStep(activeTab)}
          setActiveTab={setActiveTab}
          course={course}
        />
      );
    case "completed":
      return (
        <CoursePublish 
          course={course} 
          onStepComplete={() => goToNextStep(activeTab)}
          setActiveTab={setActiveTab}
        />
    );
    default:
      return null;
  }
}


export default CourseCreate