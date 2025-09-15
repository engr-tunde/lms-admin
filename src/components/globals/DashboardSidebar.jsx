import { useLocation } from "react-router-dom";
import { dashboardSidebarMenu } from "../../utils/data";

function DashboardSidebar() {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold">Admin</div>
        <div className="text-sm text-merseLightText font-light">
          devteeking@gmail.com
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {dashboardSidebarMenu?.map((ele, i) => (
          <div
            key={i}
            className={`text-[14px] hover:scale-105 hover:font-semibold duration-200 ease-in cursor-pointer ${
              pathname === ele.url ? "font-semibold" : "font-light"
            }`}
          >
            {ele.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardSidebar;
