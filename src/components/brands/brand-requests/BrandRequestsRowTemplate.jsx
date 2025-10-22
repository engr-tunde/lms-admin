import { Link } from "react-router-dom";
import { capitalize, compactDateFormatter, errorNotification, successNotification, useToggleOpen } from "../../../utils/helpers.js";
import StatusCheck from "../../globals/StatusCheck.jsx";
function BrandRequestsRowTemplate({ request }) {

  return (
    <tr key={request?._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm px-2 text-center">
        <Link to={`/brands/${request?._id}?tab=compliance`} className="px-3 py-1 underline">
          View
        </Link>
      </td>
      <td className="py-4 text-sm ">{capitalize(request?.name)}</td>
      <td className="">
        <StatusCheck
          value={capitalize(request?.status)}
          className="text-sm py-1 px-2 rounded-sm"
        />
      </td>
      <td className="hidden lg:table-cell py-4 text-sm ">{compactDateFormatter(request.created_at)}</td>
    </tr>
  );
}

export default BrandRequestsRowTemplate;
