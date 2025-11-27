import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, disabled = false }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`rounded-lg ${className} ${
        isSubmitting && "bg-opacity-60"
      }`}
      disabled={disabled ? true : isSubmitting ? true : false}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
