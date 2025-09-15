const GeneralButton = ({
  title,
  className,
  handleSubmit,
  disabled = false,
  isSubmitting = false,
}) => {
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

export default GeneralButton;
