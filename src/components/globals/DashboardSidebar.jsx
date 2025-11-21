import { useLocation } from "react-router-dom";
import { dashboardSidebarMenu } from "../../utils/data";
import { Link } from "react-router-dom";
import { logout } from "../../api";
import { errorNotification } from "../../utils/helpers";
import Cookies from "js-cookie";

function DashboardSidebar() {
  let location = useLocation();
  const pathname = location.pathname;

  const handleLogout = async () => {
    const res = await logout();
    if (res.status === 200) {
      setTimeout(() => {
        Cookies.remove("user-token-key");
        window.location.href = "/login";
      }, 300);
    } else {
      errorNotification(res?.data?.error);
    }
  };

  return (
    <div className="h-screen flex flex-col gap-10 overflow-y-hidden">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold">Admin</div>
        <div className="text-sm text-merseLightText font-light">
          devteeking@gmail.com
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {dashboardSidebarMenu?.map((ele, i) => (
          <Link
            to={ele.url}
            key={i}
            className={`text-[14px] hover:scale-105 hover:font-semibold duration-200 ease-in cursor-pointer ${
              pathname === ele.url
                ? "font-semibold bg-merseBorder/65 p-1"
                : "font-light"
            }`}
          >
            {ele.title}
          </Link>
        ))}
      </div>
      <div className="mt-auto mb-20 cursor-pointer" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default DashboardSidebar;
