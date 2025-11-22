import CustomFormik from "../../utils/CustomFormik";
import SubmitButton from "../forms/SubmitButton";

const CustomModal = ({
  title = "Form",
  description = "",
  children,
  onSubmit,
  showFooter = true,
  submitButtonTitle = "Submit",
  onDraft,
  initialValues,
  validationSchema,
}) => {

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-1 mb-6">
        <span className="font-semibold">{title}</span>
        {description && (
          <span className="text-sm text-merseBorder">{description}</span>
        )}
      </div>
      {onSubmit ? (
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {children}
          {showFooter && (
            <div className="flex justify-end gap-4 mt-6">
              {onDraft && (
                <button
                  type="button"
                  onClick={onDraft}
                  className="px-6 py-2 border-2 font-semibold"
                >
                  Save to Draft
                </button>
              )}
              <SubmitButton title={submitButtonTitle} className="px-6 py-2 border-2 font-semibold" />
            </div>
          )}
        </CustomFormik>
      ) : (
        <>{children}</>
      )
      }
    </div>
  );
};

export default CustomModal;
