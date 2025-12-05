import CreateMaterials from "./create-materials";
import CreatePublish from "./create-publish";
import CreateRequirements from "./create-requirements";
import CreateOverview from "./CreateOverview";

const STEP_ORDER = ["overview", "materials", "settings", "publish"];


const CourseCreate = ({ 
  activeTab, 
  setActiveTab, 
  course
}) => {

  const goToNextStep = (current) => {
    const currentIndex = STEP_ORDER.indexOf(current);
    const next = STEP_ORDER[currentIndex + 1];
    if (next) setActiveTab(next);
  };
  
  switch (activeTab) {
    case "overview":
      return (
        <CreateOverview 
          onStepComplete={() => goToNextStep("overview")}
          course={course}
        />
      );
    case "materials":
      return <CreateMaterials />;
    case "requirements":
      return <CreateRequirements />;
    case "pricing":
      return <CreatePublish />;
    default:
      return null;
  }
}


export default CourseCreate