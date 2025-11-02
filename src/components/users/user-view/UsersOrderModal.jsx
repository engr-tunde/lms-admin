import UsersOrderTable from "./UsersOrderTable";
import { IoMdClose } from "react-icons/io";

function UsersOrderModal({ show, onClose, recentOrders, userLoading, userError }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[70%] h-[80vh] flex flex-col gap-3">
        <div className="w-full h-full overflow-x-scroll px-2">
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
          <UsersOrderTable
            onClose={onClose}
            show={show}
            recentOrders={recentOrders}
            userLoading={userLoading}
            userError={userError}
          />
        </div>
      </div>
    </div>
  );
}

export default UsersOrderModal;




