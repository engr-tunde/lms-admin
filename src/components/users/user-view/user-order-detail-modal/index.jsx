import { IoMdClose } from "react-icons/io";
import ItemsTable from "./ItemsTable";
import DashboardNavBar from "../../../globals/DashboardNavBar";
import { compactDateFormatter } from "../../../../utils/helpers";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import OrderTimeline from "./OrderTimeline";

function UsersOrderDetailModal({ show, onClose, order}) {
  if (!show) return null;

  const address = order?.shippingAddress?.addressLabel + ", " + order?.shippingAddress?.city + ", " + " " + order?.shippingAddress?.country;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[80%] h-[90vh] flex flex-col gap-3">
        <button className="ml-auto block">
          <IoMdClose size={20} onClick={onClose} className="" />
        </button>
        <div className="w-full h-full overflow-x-scroll px-2 flex flex-col gap-7">
          <DashboardNavBar
            title={`ORD-${order?._id.slice(-5)}`}
            subtitle={`Placed on ${compactDateFormatter(order?.createdAt)}`}
          />
          <ItemsTable order={order} />
          {
            order?.shippingAddress && 
            <ShippingAddress address={address} />
          }
          <PaymentMethod method={order?.paymentMethod} />
          <OrderTimeline order={order} />
          <OrderSummary order={order} />
          <div className="w-full flex items-end gap-8">
            <button
              className="ml-auto text-black px-5 py-2 border-2 border-merseBorder"
            >
              Print Invoice
            </button>
            <button
              className="text-black px-5 py-2 border-2 border-merseBorder"
            >
              Contact User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersOrderDetailModal;




