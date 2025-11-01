import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateResetPassword } from "../../utils/validate";
import { resetPasswordValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { useLocation, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import AuthHeader from "./AuthHeader";
import { resetPassword } from "../../api";

const ResetPasswordBody = () => {
  const initialValues = resetPasswordValues();
  const validationSchema = validateResetPassword();
  const history = useNavigate();
  const location = useLocation();
  const requestID = location?.state?.requestID;
  if (!requestID) {
    errorNotification("Sorry, you cannot visit this page without a token");
    history("/login");
  }

  const handleSubmit = async (values) => {
    const response = await resetPassword({ requestID, ...values });
    if (response.status === 200) {
      successNotification(response.data.message);
      history("/login");
    } else {
      errorNotification(response?.data?.message);
    }
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
            <InputField
              type="password"
              name="password"
              placeholder="Set password"
            />
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </div>
          <SubmitButton title="Reset Password" className="mt-6 w-[100%] py-3" />
        </CustomFormik>
      </div>
    </>
  );
};

export default ResetPasswordBody;
