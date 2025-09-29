const GeneralButton = ({
  title,
  className,
  handleSubmit,
  disabled,
  isSubmitting,
}) => {
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={`primary-btnn py-3 ${className} ${
        (isSubmitting || disabled) && "bg-opacity-60"
      }`}
      disabled={isSubmitting || disabled ? true : false}
    >
      {label}
    </button>
  );
};

export default GeneralButton;
