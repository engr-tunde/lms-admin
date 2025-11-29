import { Field, useFormikContext } from "formik";

const CheckboxField = ({ name, array, title, className = "", ...rest }) => {
  const { errors, values, touched } = useFormikContext();

  const selectedValues = values[name] || [];
  const error = errors[name];
  const isTouched = touched[name];

  return (
    <div className={`space-y-2 ${className}`}>
      {title && <div className="text-sm font-medium text-gray-700">{title}</div>}

      <div className="space-y-2">
        {array.map((item, i) => {
          const value =
            typeof array[0] === "object" ? item?.value : item;
          const label =
            typeof array[0] === "object" ? item?.title : item;

          return (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <Field
                type="checkbox"
                name={name}
                value={value}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                {...rest}
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          );
        })}
      </div>

      {error && isTouched ? (
        <div className="text-red-500 text-[12px] lowercase">{error}</div>
      ) : null}
    </div>
  );
};

export default CheckboxField;
