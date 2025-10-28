import { capitalize } from "../../../utils/helpers";
import NoDataPage from "../../globals/NoDataPage";
import StatusCheck from "../../globals/StatusCheck";

const DeliveryDetailsCard = ({ address }) => {
  if (!address) return <NoDataPage message="No delivery details available." />;
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">Delivery Details</div>
      <div className="bg-gray-100/50 w-full p-4 flex flex-col justify-between h-[160px]">
        <div className="flex flex-col h-full">
          <span className="text-merseLightText">Preferred delivery method</span>
          <span className="text-sm font-semibold">Standard Delivery</span>
        </div>
        <div className="flex flex-col h-full">
          <span className="text-merseLightText">Saved address</span>
          <span className="text-sm font-semibold">{address || "24B Kofo Abayomi Street, Victoria Island, Lagos, Nigeria."}</span>
        </div>
      </div>
    </div>
  )
}

export default DeliveryDetailsCard;