import CreateMaterials from "./create-materials";
import CreatePublish from "./create-publish";
import CreateRequirements from "./create-requirements";
import CreateOverview from "./CreateOverview";

const CourseCreate = ({ 
  activeTab, 
  categories, 
  setActiveTab, 
  stepCompleted, 
  setStepCompleted, 
  courseId,
  setCourseId,
  course
}) => {

  const handleStepComplete = (stepId) => {
    setStepCompleted((prev) => {
      const updated = { ...prev, [stepId]: true };
      const nextStep = Object.keys(updated).find((k) => !updated[k]);
      if (nextStep) setActiveTab(nextStep);
      return updated;
    });
  };


  switch (activeTab) {
    case "overview":
      return (
        <CreateOverview 
          categories={categories} 
          setCourseId={setCourseId}
          onStepComplete={() => handleStepComplete("overview")}
          course={course}
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