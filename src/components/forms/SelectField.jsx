import { Field, useFormikContext } from "formik";

const SelectField = ({ name, placeholder, array, title, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  console.log("typeof array[0]", typeof array[0]);

  return (
    <div className="col-span-1">
      <Field
        name={name}
        as="select"
        className={`w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2`}
      >
        {title && <option value="roles">{title}</option>}
        {array.map((item, i) => (
          <option
            className=""
            key={i}
            value={typeof array[0] == "object" ? item?.value : item}
          >
            {typeof array[0] == "object" ? item?.title : item}
          </option>
        ))}
      </Field>
      {error && isInputTouched ? (
        <div className="text-red-500 text-[12px] font-400 lowercase">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default SelectField;
