import { capitalize, dateFormatter, formatter } from "../../../utils/helpers";
import { FaChevronRight } from "react-icons/fa";
import StatusCheck from "../../globals/StatusCheck";
import { useState } from "react";
import UsersOrderModal from "./UsersOrderModal";
import { fetchAllOrders } from "../../../api";
import ExtraOrderItemsBadge from "../../orders/ExtraOrderItemsBadge";
import NoDataPage from "../../globals/NoDataPage";

const RecentOrderCard = ({ recentOrders, userLoading, userError }) => {
  const [showModal, setshowModal] = useState(false);
  if (!recentOrders?.length) return <NoDataPage message="No recent orders available."/>;

  return (
    <>
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between">
        <span className="font-semibold ">Recent order</span>
        <button 
          className="cursor-pointer"
          onClick={() => setshowModal(true)}
        >
          View all order history
          <FaChevronRight size={10} className="inline-block ml-1"/>
        </button>
      </div>
      <div className="flex flex-col bg-gray-100/50 p-4 gap-4">
        {recentOrders?.slice(0, 4)?.map((order) => (
        <RecentOrder key={order?._id} order={order}/>
        ))}
      </div>
    </div>
    <UsersOrderModal 
      show={showModal}
      onClose={() => setshowModal(false)}
      recentOrders={recentOrders}
      userLoading={userLoading}
      userError={userError}
    />
    </>
  )
}

export default RecentOrderCard;


const RecentOrder = ({ order }) => {
  return (
    <>
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-2">
        <div className="font-semibold">Order #{order?._id.slice(-5)}</div>
        <div className="flex items-center gap-3 w-full">
          <span className="text-sm truncate lg:max-w-[200px]">{capitalize(order?.items[0]?.productName)}</span>
          <ExtraOrderItemsBadge items={order?.items} />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <StatusCheck value={capitalize(order?.status)} className="px-3 py-1"/>
        <div>{dateFormatter(order?.createdAt)}</div>
      </div>
    </div>
    </>
  )
}