import { useFormikContext } from "formik";

const TextAreaField = ({
  name,
  label,
  placeholder,
  rows = 4,
  full = false,
  disabled = false,
  ...rest
}) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <div className={full ? "col-span-1 md:col-span-2" : "col-span-1"}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-[14px] font-medium capitalize"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        disabled={disabled}
        rows={rows}
        className="border-[1px] border-black/90 w-full bg-transparent p-3 text-[14px] resize-none"
        {...rest}
      />

      {error && isInputTouched && (
        <div className="text-red-500 text-[12px] font-400 lowercase mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextAreaField;
