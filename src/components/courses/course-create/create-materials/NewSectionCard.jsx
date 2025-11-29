import InputField from "../../../forms/InputField";
import TextAreaField from "../../../forms/TextAreaField";
import CustomModal from "../../../globals/Modals";

const NewSectionCard = ({ onAdd, onCancel, initialValues, validationSchema }) => {
  
  return (
    <div className="bg-white px-6 py-8 rounded-lg border-2 border-purple-200">
      <CustomModal
        title="New Section"
        submitButtonTitle="Add"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onAdd(values)}
      >
        <div className="flex flex-col gap-4">
          <InputField 
            name="title" 
            placeholder="Enter a Title"
          />
          <TextAreaField
            name="objective"
            placeholder="Enter a Learning Objective"
            rows={2}
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Add Section
          </button>
        </div>
      </CustomModal>
    </div>
  );
};


export default NewSectionCard;