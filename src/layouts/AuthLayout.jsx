import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const AuthLayout = () => {
  useEffect(() => {
    let session = Cookies.get("authToken");
    if (session) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <div className="w-[100wv] h-[100vh]">
        <div className="max-w-[450px] h-full mx-auto px-10 md:px-7 flex flex-col items-center justify-center pt-[90px] pb-[150px] md:py-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
