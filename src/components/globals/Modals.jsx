import CustomFormik from "../forms/CustomFormik"


const CustomModal = ({
  title = "Form",
  description,
  children,
  initialValues,
  validationSchema,
  onSubmit,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="font-semibold mb-2 text-md">{title}</div>
      {description && <div className="text-sm text-gray-500">{description}</div>}

      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {children}
      </CustomFormik>
    </div>
  );
};

export default CustomModal;
