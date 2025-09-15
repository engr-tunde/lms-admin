import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, disabled = false }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={`primary-btnn py-3 ${className} ${
        isSubmitting && "bg-opacity-60"
      }`}
      disabled={disabled ? true : isSubmitting ? true : false}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
