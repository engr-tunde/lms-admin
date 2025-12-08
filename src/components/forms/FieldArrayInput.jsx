import { FieldArray, useFormikContext } from "formik";
import { PlusIcon, TrashIcon } from "../globals/Icons";

const FieldArrayInput = ({ name, placeholder, type = "text", addButtonTitle }) => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();
  const fieldValues = values[name] || [];

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className="flex flex-col gap-4">
          {fieldValues.map((val, index) => {
            const fieldName = `${name}[${index}]`;
            const error = errors?.[name]?.[index];
            const isTouched = touched?.[name]?.[index];

            return (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-1">
                  <input
                    name={fieldName}
                    value={val}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    type={type}
                    className="border-[1px] border-merseBorder w-full bg-transparent p-3 text-[14px] rounded-lg focus:outline-purple-600"
                  />
                  {error && isTouched && (
                    <div className="text-red-500 text-[12px] font-400 lowercase">
                      {error}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            );
          })}
          <div>
            <button
              type="button"
              onClick={() => arrayHelpers.push("")}
              className="px-4 py-2 text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              {addButtonTitle || "Add Item"}
            </button>
          </div>
        </div>
      )}
    />
  );
};

export default FieldArrayInput;
