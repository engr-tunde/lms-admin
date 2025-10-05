import { IoMdClose } from "react-icons/io";
import CustomFormik from "../../utils/CustomFormik";
import SubmitButton from "../forms/SubmitButton";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import { errorNotification, successNotification } from "../../utils/helpers";

const CustomModal = ({
  show,
  onClose,
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  title = "Form",
  description = "",
  submitButtonTitle = "Submit"
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[70%] lg:w-1/2">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} />
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <span className="text-xl font-semibold">{title}</span>
          {description && (
            <span className="text-sm text-merseBorder">{description}</span>
          )}
        </div>

        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {fields.map((field, idx) => {
              if (field.type === "text" || field.type === "email") {
                return (
                  <div
                    key={idx}
                    className={`col-span-${field.colSpan || 1}`}
                  >
                    <InputField
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  </div>
                );
              }
              if (field.type === "select") {
                return (
                  <div
                    key={idx}
                    className={`col-span-${field.colSpan || 1}`}
                  >
                    <SelectField
                      name={field.name}
                      array={field.options}
                      title={field.title}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border-2 text-sm"
            >
              Cancel
            </button>
            <SubmitButton title={submitButtonTitle} className="px-3 py-1" />
          </div>
        </CustomFormik>
      </div>
    </div>
  );
};

export default CustomModal;
