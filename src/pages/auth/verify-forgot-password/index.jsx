import { useEffect } from "react";
import Head from "../../../components/globals/Head";
import VerifyForgotPasswordBody from "../../../components/auth/VerifyForgotPasswordBody";

const VerifyForgotPasswordPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Head pageTitle="Verify Forgot Password" />
      <VerifyForgotPasswordBody />
    </>
  );
};

export default VerifyForgotPasswordPage;
