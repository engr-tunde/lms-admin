import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateForgotPassword } from "../../utils/validate";
import { forgotPasswordValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { errorNotification, successNotification } from "../../utils/helpers";
import { forgotPassword } from "../../api";
import AuthHeader from "./AuthHeader";
import { useNavigate } from "react-router-dom";

const ForgotPasswordBody = () => {
  const initialValues = forgotPasswordValues();
  const validationSchema = validateForgotPassword();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    const response = await forgotPassword(values);
    // console.log("response", response);
    if (response.status.toString().includes("20")) {
      successNotification(response.data.message);
      setTimeout(() => {
        history("/verify-forgot-password", {
          state: { email: values.email },
        });
      }, 300);
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <>
      <AuthHeader
        title="Forgot password?"
        subtitle="We can help you reset your password using the email address linked to your account"
      />
      <div className="py-2 w-[85%] mx-auto">
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
            <InputField name="email" placeholder="Account email address" />
          </div>
          <SubmitButton
            title="Send Password Reset Code"
            className="mt-5 w-[100%] py-3"
          />
        </CustomFormik>
      </div>
    </>
  );
};

export default ForgotPasswordBody;
