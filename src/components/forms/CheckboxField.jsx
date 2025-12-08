import { useFormikContext } from "formik";

const CheckboxField = ({
  name,
  label,
  disabled = false,
  className = "",
  ...rest
}) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();

  const checked = values[name];
  const error = errors[name];
  const isTouched = touched[name];

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          className="
            w-5 h-5 text-purple-600 rounded 
            focus:ring-2 focus:ring-purple-500 
            border-gray-300
          "
          {...rest}
        />
        <span className="text-gray-700">{label}</span>
      </label>

      {isTouched && error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default CheckboxField;
