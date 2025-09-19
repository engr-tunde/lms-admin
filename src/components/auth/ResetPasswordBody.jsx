import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateResetPassword } from "../../utils/validate";
import { resetPasswordValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { useLocation, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import { userResetPassword } from "../../api";
import AuthHeader from "./AuthHeader";

const ResetPasswordBody = () => {
  const initialValues = resetPasswordValues();
  const validationSchema = validateResetPassword();
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const id = queryParams.get("id");
  // if (!id || !token) {
  //   errorNotification(
  //     "Sorry, you cannot visit this page without a valid link sent to your email"
  //   );
  //   history("/login");
  // }

  const handleSubmit = async (values) => {
    // const response = await userResetPassword(id, token, {
    //   password: values.password,
    // });
    // if (response.status === 200) {
    //   successNotification(response.data.message);
    //   history("/login");
    // } else {
    //   errorNotification(response?.data?.error);
    // }
    successNotification("Password successfully updated! Now log in");
    setTimeout(() => {
      history("/login");
    }, 300);
  };

  return (
    <>
      <AuthHeader
        title="Setup new password"
        subtitle="Enter a new password for your account"
      />
      <div className="py-2 w-full">
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-5 md:grid-cols-1 w-[100%] mb-2">
            <InputField name="password" placeholder="Set password" />
            <InputField name="confirmPassword" placeholder="Confirm password" />
          </div>
          <SubmitButton title="Reset Password" className="mt-6 w-[100%]" />
        </CustomFormik>
      </div>
    </>
  );
};

export default ResetPasswordBody;
