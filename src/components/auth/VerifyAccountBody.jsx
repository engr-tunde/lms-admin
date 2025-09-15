import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import OTPInputField from "../forms/OTPInputField";
import { userResendVerifyEmailOTP, userVerifyEmail } from "../../api";
import Cookies from "js-cookie";
import AuthHeader from "./AuthHeader";
import GeneralButton from "../forms/GeneralButton";

const VerifyAccountBody = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const onChange = (value) => setOtp(value);

  const history = useNavigate();
  const location = useLocation();
  const userId = location?.state?.userId;
  // console.log({ userId });

  let otpLength = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const resendOTP = async () => {
    const response = await userResendVerifyEmailOTP({ userId });
    if (response.status === 200) {
      successNotification("New OTP successfully sent!");
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const handleSubmit = async () => {
    setisSubmitting(true);
    setdisabled(true);

    const response = await userVerifyEmail({
      otp: otp,
      userId,
    });
    console.log("response", response);
    if (response.status === 200) {
      Cookies.set("u-x", response?.headers["u-x-key"]);
      setTimeout(() => history("/dashboard"), 3000);
    } else {
      errorNotification(response?.data?.error);
    }
    setisSubmitting(false);
    setdisabled(false);
  };

  // useEffect(() => {
  //   if (otp.length < otpLength) {
  //     setdisabled(true);
  //   } else {
  //     setdisabled(false);
  //   }
  // }, [otp]);

  return (
    <>
      <AuthHeader
        title="We emailed you a code"
        subtitle={`We sent a six digit code to marse@marse.com , it will be valid for 10 minutes. it may be in your spam folder`}
      />

      <div className="text-sm">Please enter verification code here</div>

      <div className="py-2 w-full">
        {/* <form method="post"> */}
        <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
          <OTPInputField
            name="otp"
            value={otp}
            valueLength={otpLength}
            onChange={onChange}
          />
        </div>

        <GeneralButton
          handleSubmit={handleSubmit}
          className="mt-6 w-[100%]"
          title="Verify Code"
        />

        <div className="mt-[20px]">
          {seconds > 0 || minutes > 0 ? (
            <div className="flex align-items-center text-sm">
              Can resend in: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex align-items-center text-sm">
                Didn&apos;t recieve code?
              </div>
              <div
                onClick={resendOTP}
                className="text-[#fff] font-semibold cursor-pointer text-sm underline"
              >
                Resend OTP
              </div>
            </div>
          )}
        </div>
        {/* </form> */}
      </div>
    </>
  );
};

export default VerifyAccountBody;
