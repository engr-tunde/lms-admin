import CreateMaterials from "./create-materials";
import CreatePublish from "./create-publish";
import CreateRequirements from "./create-requirements";
import CreateOverview from "./CreateOverview";

const CourseCreate = ({ 
  activeTab, 
  categories, 
  setActiveTab, 
  stepCompleted, 
  setStepCompleted 
}) => {
  switch (activeTab) {
    case "overview":
      return (
      <CreateOverview 
        categories={categories} 
        stepCompleted={stepCompleted} 
        setStepCompleted={setStepCompleted} 
        setActiveTab={setActiveTab}
      />
    );
    case "materials":
      return <CreateMaterials />;
    case "settings":
      return <CreateRequirements />;
    case "publish":
      return <CreatePublish />;
    default:
      return null;
  }
}


export default CourseCreate