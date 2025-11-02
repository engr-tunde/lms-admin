import { Link } from "react-router-dom";
import { capitalize, compactDateFormatter, formatter } from "../../../utils/helpers";
import StatusCheck from "../../globals/StatusCheck";
import UsersOrderDetailModal from "./user-order-detail-modal"
import { useState } from "react";

function UsersOrderRowTemplate({ userOrder, i}) {
  const [showDetailModal, setshowDetailModal] = useState(false);


  return (
    <>
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">#ORD{userOrder?._id.slice(-5)}</td>
      <td className="py-4 text-sm">{compactDateFormatter(userOrder?.createdAt)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {userOrder?.items.reduce((acc, item) => acc + item.quantity, 0)
        }
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{formatter(userOrder?.totalAmount).slice(0, -3)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        <StatusCheck 
          value={capitalize(userOrder?.status)} 
          className="px-3 py-1"
        />
      </td>
      <td className="py-4">
        <button 
          onClick={() => setshowDetailModal(true)} 
          className="border-2 text-xs px-3 py-1"
        >
          View Profile
        </button>
        {/* <Link to={`/orders/${userOrder?._id}`} className="border-2 text-xs px-3 py-1">
          View Profile
        </Link> */}
      </td>
    </tr>
    <UsersOrderDetailModal
      show={showDetailModal}
      onClose={() => setshowDetailModal(false)}
      order={userOrder}
    />
    </>
  );
}

export default UsersOrderRowTemplate;
