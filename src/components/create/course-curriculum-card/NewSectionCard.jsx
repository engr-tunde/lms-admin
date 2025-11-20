import InputField from "../../forms/InputField";
import TextAreaField from "../../forms/TextAreaField";
import CustomModal from "../../globals/Modals";

const NewSectionCard = ({ onAdd, initialValues, validationSchema }) => {
  return (
    <div className="bg-gray-200/60 p-4 rounded-md border border-gray-300">
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
            rows={1}
          />
        </div>
      </CustomModal>
    </div>
  );
};


export default NewSectionCard;