import { useState } from "react";
import { PlusIcon } from "../../../globals/Icons";
import NewSectionCard from "./NewSectionCard"
import { courseCurriculumValues } from "../../../../utils/initialValues";
import { validateCourseCurriculum } from "../../../../utils/validate";
import SectionListItem from "./SectionListItem";
import MaterialUploadModal from "./UploadMaterialsModal";

const CourseMaterials = () => {
  let initialValues = courseCurriculumValues();
  const validationSchema = validateCourseCurriculum();

  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Introduction to AI",
      objective: "Understand basic AI concepts and their applications in modern technology",
      materials: 3,
    },
    {
      id: 2,
      title: "Neural Networks",
      objective:
        "Learn the fundamentals of neural networks, including architecture, training processes, and practical implementations in machine learning applications",
      materials: 5,
    },
  ]);
  const [showNewSection, setShowNewSection] = useState(false);
  const [showMaterialModal, setShowMaterialModal] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);

  const addSection = (values) => {
    const newSection = {
      id: Date.now(),
      title: values.title,
      objective: values.objective,
      materials: 0,
    };
    setSections([...sections, newSection]);
    setShowNewSection(false);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const editSection = (id) => {
    console.log("Edit section:", id);
  };

  const handleAddMaterial = (sectionId) => {
    setActiveSectionId(sectionId);
    setShowMaterialModal(true);
  };

  const handleMaterialSubmit = (sectionId, material) => {
    setSections(
      sections.map((s) =>
        s.id === sectionId ? { ...s, materials: (s.materials || 0) + 1 } : s
      )
    );
    console.log("Material uploaded:", material);
  };

  return (
    <div className="w-full mx-auto">
      <div className="space-y-6">
        {sections.length === 0 ? (
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
          sections.map((section, index) => (
            <SectionListItem
              key={section.id}
              section={section}
              index={index}
              onDelete={deleteSection}
              onEdit={editSection}
              onAddMaterial={handleAddMaterial}
            />
          ))
        )}
        {showNewSection ? (
          <NewSectionCard
            onAdd={addSection}
            onCancel={() => setShowNewSection(false)}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        ) : (
          sections.length > 0 && (
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

      {sections.length > 0 && (
        <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
          <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            ← Back to Overview
          </button>
          <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Continue to Publish →
          </button>
        </div>
      )}
      <MaterialUploadModal
        show={showMaterialModal}
        onClose={() => setShowMaterialModal(false)}
        onSubmit={handleMaterialSubmit}
        sectionId={activeSectionId}
      />
    </div>
  );
};

export default CourseMaterials;