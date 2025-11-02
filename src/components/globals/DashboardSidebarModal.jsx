import { motion, AnimatePresence } from "framer-motion";
import { dashboardSidebarMenu } from "../../utils/data";
import { Link, useLocation } from "react-router-dom";
import { errorNotification } from "../../utils/helpers";
import { fetcher } from "../../api/fetcher";
import { LOGOUT } from "../../constants/routes";
import Cookies from "js-cookie";
import { FaX } from "react-icons/fa6";

function DashboardSidebarModal({ onClose }) {
  const location = useLocation();
  const pathname = location.pathname;

  const handleLogout = async () => {
    const response = await fetcher(LOGOUT);
    if (response.success) {
      setTimeout(() => {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }, 300);
    } else {
      errorNotification(response?.message);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        key="sidebar"
        className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 flex flex-col gap-10 p-6 shadow-lg"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm font-semibold">Admin</div>
            <div className="text-sm text-merseLightText font-light">
              devteeking@gmail.com
            </div>
          </div>
          <button onClick={onClose}>
            <FaX size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {dashboardSidebarMenu?.map((ele, i) => (
            <Link
              to={ele.url}
              key={i}
              onClick={onClose}
              className={`text-[14px] hover:scale-105 hover:font-semibold duration-200 ease-in cursor-pointer ${
                pathname === ele.url
                  ? "font-semibold bg-merseBorder/65 p-1 rounded"
                  : "font-light"
              }`}
            >
              {ele.title}
            </Link>
          ))}
        </div>

        <div className="mt-auto mb-10 cursor-pointer" onClick={handleLogout}>
          Logout
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DashboardSidebarModal;
