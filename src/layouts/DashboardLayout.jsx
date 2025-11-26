import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/globals/DashboardSidebar";
import DashboardSidebarModal from "../components/globals/DashboardSidebarModal";
import Cookies from "js-cookie";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const DashboardLayout = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let session = Cookies.get("user-token-key");
    if (!session) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <div className="lg:hidden flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <HiOutlineBars3CenterLeft
          size={22}
          className="cursor-pointer"
          onClick={() => setNav(true)}
        />
      </div>

      <div className="h-full w-full flex flex-row gap-2 py-8 px-10 relative">
        {!nav && (
          <div className="hidden lg:block w-1/6 h-screen sticky top-0">
            <DashboardSidebar />
          </div>
        )}
        <div
          className="w-full lg:w-5/6 flex flex-col gap-11 md:gap-10 mb-8 lg:mb-2 h-[95vh] pb-3 overflow-y-auto"
          style={{
            backdropFilter: nav ? "blur(8px)" : "",
          }}
        >
          <Outlet />
        </div>
        {nav && <DashboardSidebarModal onClose={() => setNav(false)} />}
      </div>
    </>
  );
};

export default DashboardLayout;
