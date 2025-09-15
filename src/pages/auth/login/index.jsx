import { useEffect } from "react";
import LoginBody from "../../../components/auth/LoginBody";
import Head from "../../../components/globals/Head";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Login to your account" />
      <LoginBody />
    </>
  );
};

export default LoginPage;
