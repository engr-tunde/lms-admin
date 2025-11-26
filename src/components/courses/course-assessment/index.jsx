import AssessmentPublish from "./assessment-publish";
import AssessmentQuestions from "./assessment-questions";
import AssessmentSettings from "./assessment-settings";

const CourseAssessment = ({ 
  activeTab  
}) => {
  switch (activeTab) {
    case "settings":
      return <AssessmentSettings />;
    case "questions":
      return <AssessmentQuestions />;
    case "publish":
      return <AssessmentPublish />;
    default:
      return null;
  }
}


export default CourseAssessment