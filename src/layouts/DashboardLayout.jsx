import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavBar from "../components/globals/DashboardNavBar";
// import { checkSession } from "../api";
import DashboardSidebar from "../components/globals/DashboardSidebar";
import Cookies from "js-cookie";

const DashboardLayout = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let session = Cookies.get("authToken");
    console.log("session", session);
    if (!session) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <div className="h-full w-full flex flex-row gap-2 py-8 px-10">
        <div className="hidden lg:block w-1/6">
          <DashboardSidebar />
        </div>
        <div
          className="w-[90%] lg:w-5/6 flex flex-col gap-11 md:gap-10 mb-8 lg:mb-2 h-[95vh] pb-3"
          style={{
            backdropFilter: nav ? "blur(8px)" : "",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
