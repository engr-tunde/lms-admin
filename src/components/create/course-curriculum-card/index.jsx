import { useState } from "react";
import { courseCurriculumValues } from "../../../utils/initialValues";
import { validateCourseCurriculum } from "../../../utils/validate";
import { BsPlusLg } from "react-icons/bs";
import NewSectionCard from "./NewSectionCard";
import ExistingSectionList from "./ExistingSectionList";
import { FiPlus } from "react-icons/fi";

const CourseCurriculumCard = () => {
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
          className="bg-black text-white py-1 px-3 flex items-center hover:bg-gray-800 transition"
          onClick={() => setToggleAdd(!toggleAdd)}
        >
          <FiPlus
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
      {sections && (
        <div className="flex justify-end">
          <button className="border-merseBorder px-4 py-2 bg-black text-white">
            Continue to Requirements
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCurriculumCard;
