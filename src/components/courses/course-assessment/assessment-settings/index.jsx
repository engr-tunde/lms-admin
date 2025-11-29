import { useState } from "react";
import AssessmentConfiguration from "./AssessmentConfiguration"
import CustomModal from "../../../globals/Modals"
import { assessmentConfigurationValues } from "../../../../utils/initialValues"
import { validateAssessmentConfigurationValues } from "../../../../utils/validate"



const AssessmentSettings = () => {
  const [assessmentData, setAssessmentData] = useState({
    title: '',
    duration: '',
    passingScore: '',
    attempts: '1',
    shuffleQuestions: false,
    showResults: true
  });

  const initialValues = assessmentConfigurationValues();
  const validationSchema = validateAssessmentConfigurationValues();

  return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Assessment Configuration</h2>
        <CustomModal
          title=""
          initialValues={initialValues}
          validationSchema={validationSchema}
          description={""}
          onSubmit={() => console.log("submitted")}
        >
          <AssessmentConfiguration 
            assessmentData={assessmentData}
            setAssessmentData={setAssessmentData}
          />
        </CustomModal>
        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
          <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Save Draft
          </button>
          <button 
            onClick={() => setActiveTab('questions')}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Continue to Questions →
          </button>
        </div>
      </div>
  )
}

export default AssessmentSettings;