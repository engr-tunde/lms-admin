import { useState } from "react";
import { courseCurriculumValues } from "../../../../utils/initialValues";
import { validateCourseCurriculum } from "../../../../utils/validate";
import NewSectionCard from "./NewSectionCard";
import ExistingSectionList from "./ExistingSectionList";
import { PlusIcon } from "../../../globals/Icons";

const CreateMaterials = ({ activeTab, setActiveTab }) => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Introduction to AI",
      objective: "Understand basic AI concepts",
      materials: 3, 
    },
    {
      id: 2,
      title: "Neural Networks",
      objective:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum expedita eos unde ab, amet molestias voluptatum vero accusantium officiis ducimus nobis quia. Quia dignissimos illum impedit commodi iusto placeat eaque, dolorum blanditiis libero nulla, dicta harum sit quas amet corporis perspiciatis necessitatibus. Facilis voluptatibus cum illo veniam a accusantium.",
      materials: 5,
    },
  ]);
  const [toggleAdd, setToggleAdd] = useState(false);
  let initialValues = courseCurriculumValues();
  const validationSchema = validateCourseCurriculum();

  const addSection = (values) => {
    const newItem = {
      id: Date.now(),
      title: values.title,
      objective: values.objective,
    };
    setSections([...sections, newItem]);
  };
  const deleteSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const updateSection = (id) => {
    setToggleAdd(true);
    initialValues = sections.find((s) => s.id === id);
  };

  return (
    <div className="flex flex-col gap-6">
      <ExistingSectionList
        sections={sections}
        onDelete={deleteSection}
        onUpdate={updateSection}
        onAddMaterials={() => {}}
      />
      <div>
        <button
          className="border-2 rounded-lg py-1 px-3 flex items-center hover:bg-gray-200/50 transition"
          onClick={() => setToggleAdd(!toggleAdd)}
        >
          <PlusIcon
            className={`w-4 h-4 transition-transform duration-300 ${
              toggleAdd ? "rotate-45" : "rotate-0"
            }`}
          />
          <span className={`${toggleAdd ? "hidden" : ""}`}>Add Section</span>
        </button>
      </div>
      {toggleAdd && (
        <NewSectionCard
          onAdd={addSection}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      )}
      <div className="flex justify-between">
        <button 
          onClick={() => setActiveTab('materials')}
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          ← Back to Overview
        </button>
        {sections && (
          <button 
            onClick={() => setActiveTab('publish')}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Continue to Materials →
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateMaterials;
