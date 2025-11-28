import { useFormikContext } from "formik";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  name,
  placeholder,
  type = "text",
  full = false,
  className,
  disabled = false,
  ...rest
}) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className}`}>
      {type === "password" ? (
        <div className="border-[1px] border-merseBorder w-[100%] bg-transparent flex items-center justify-between gap-1 pe-1 rounded-lg focus-within:border-purple-600 focus-within:border-2">
          <input
            value={value}
            placeholder={placeholder}
            onChange={handleChange(name)}
            onBlur={handleBlur(name)}
            type={showPassword ? "text" : "password"}
            disabled={disabled}
            className="border-0 w-[90%] bg-transparent p-3 text-[14px] font-[400] focus:outline-none"
            autoComplete="off"
            {...rest}
          />
          {showPassword ? (
            <EyeOff className="text-black" size={17} onClick={togglePassword} />
          ) : (
            <Eye className="text-black" size={17} onClick={togglePassword} />
          )}
        </div>
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange(name)}
          onBlur={handleBlur(name)}
          type={type}
          disabled={disabled}
          className="border-[1px] border-merseBorder w-full bg-transparent p-3 text-[14px] rounded-lg focus:outline-purple-600"
          autoComplete="off"
          {...rest}
        />
      )}
      {error && isInputTouched ? (
        <div className="text-red-500 text-[12px] font-400 lowercase">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default InputField;
