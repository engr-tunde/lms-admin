import { useEffect, useState } from "react";
import { PlusIcon } from "../../../globals/Icons";
import NewSectionCard from "./NewSectionCard"
import SectionListItem from "./SectionListItem";
import { deleteMaterial, fetchCourseMaterial } from "../../../../api"
import { useParams } from "react-router-dom";
import { errorNotification, successNotification } from "../../../../utils/helpers";
import { courseCurriculumValues } from "../../../../utils/initialValues";
import { validateCourseCurriculum } from "../../../../utils/validate";


const CourseMaterials = ({ onStepComplete, setActiveTab, course }) => {
  const { courseMaterial, mutate } = fetchCourseMaterial(course?._id);
  console.log("courseMaterial", courseMaterial);

  const [sections, setSections] = useState();
  const [showNewSection, setShowNewSection] = useState(false);
  const { id: courseId } = useParams();
  let initialValues = courseCurriculumValues();
  const validationSchema = validateCourseCurriculum();

  useEffect(() => {
    if (courseMaterial?.data?.length) {
      setSections(courseMaterial.data);
    }
  }, [courseMaterial]);
  const handleCreateSection = async (values) => {
    const response = await addMaterialTitle(values, courseId)
    if (response.status.toString().includes("20")) {
    successNotification(response.data?.message);
    console.log("response", response.data)
    mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  }

  const handleDeleteSection = async (id) => {
    const response = await deleteMaterial(id)
    if (response.status.toString().includes("20")) {
    successNotification(response.data?.message);
    console.log("response", response.data)
    mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  }

  const editSection = (id) => {
    console.log("Edit section:", id);
  };

  return (
    <div className="w-full mx-auto">
      <div className="space-y-6">
        {!sections ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">No sections added yet</p>
            <button
              onClick={() => setShowNewSection(true)}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Create First Section
            </button>
          </div>
        ) : (
          sections?.map((section, index) => (
            <SectionListItem
              key={section?._id}
              section={section}
              index={index}
              onDelete={() => handleDeleteSection(section?._id)}
              onEdit={editSection}
              mutate={mutate}
            />
          ))
        )}
        {showNewSection ? (
          <NewSectionCard
            onCancel={() => setShowNewSection(false)}
            mutate={mutate}
            handleSubmit={handleCreateSection}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        ) : (
          sections?.length > 0 && (
            <button
              onClick={() => setShowNewSection(true)}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg py-4 flex items-center justify-center gap-2 hover:border-purple-400 hover:bg-purple-50 transition-colors text-gray-600 hover:text-purple-600"
            >
              <PlusIcon className="w-5 h-5" />
              <span className="font-medium">Add Section</span>
            </button>
          )
        )}
      </div>      
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
        <button 
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          onClick={() => setActiveTab("overview")}
        >
          ← Back to Overview
        </button>
        {sections?.length > 0 && (
          <button 
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            onClick={onStepComplete}
          >
            Continue to Requirements →
          </button>)}
      </div>
    </div>
  );
};

export default CourseMaterials;