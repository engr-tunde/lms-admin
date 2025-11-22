import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, disabled = false }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`text-white bg-purple-600 ${className} ${
        isSubmitting && "bg-opacity-60"
      }`}
      disabled={disabled ? true : isSubmitting ? true : false}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
