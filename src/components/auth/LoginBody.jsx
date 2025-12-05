import InputField from "../forms/InputField";
import CustomFormik from "../forms/CustomFormik";
import { validateLogin } from "../../utils/validate";
import { loginValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import AuthHeader from "./AuthHeader";
import { login } from "../../api";
import Cookies from "js-cookie";

const LoginBody = () => {
  const initialValues = loginValues();
  const validationSchema = validateLogin();

  const history = useNavigate();

  const handleSubmit = async (values) => {
    const res = await login(values);
    if (res.status === 200) {
      Cookies.set("user-token-key", res.headers["u-x-key"]);
      successNotification(res?.data?.message);
      setTimeout(() => {
        history("/");
      }, 300);
    } else {
      errorNotification(res?.data?.error);
    }
  };

  return (
    <>
      <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to manage and create courses, tests, assignments, students and many more"
      />
      <div className="py-2 w-[85%] mx-auto">
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-5 md:grid-cols-1 w-[100%] mb-2">
            <InputField name="email" placeholder="Your email address" />
            <InputField
              name="password"
              placeholder="Account password"
              type="password"
            />
          </div>
          <SubmitButton title="Signin" className="mt-6 w-[100%] py-3 bg-purple-600 text-white" />
          <div className="text-[13px] md:text-[14px] text-center mt-[20px] flex justify-end gap-2">
            <Link to="/forgot-password" className="font-semibold">
              Forgot password
            </Link>
          </div>
        </CustomFormik>
      </div>
    </>
  );
};

export default LoginBody;
