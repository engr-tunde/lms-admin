import { Link } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";
import { capitalize, compactDateFormatter } from "../../../utils/helpers.js";
import StatusCheck from "../../globals/StatusCheck.jsx";

function BrandRequestsRowTemplate({request, i}) {

  return (
    <tr key={request?._id} className="border-1 border-t border-merseBorder">
      <td className="hidden lg:table-cell py-4 text-sm px-2 text-center">
        <Link to={`/brands/${request?._id}`} className="px-3 py-1 underline">
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
      <td className="py-4">
        <div className="relative">
          <button
            className="flex text-sm items-center gap-1 px-3 py-1 border"
            onClick={(e) => {
            //   e.stopPropagation();
            //   toggle();
            }}
          >
            Action
            <RiArrowDownSFill size={10} />
          </button>
          {/* {isOpen && (
            <div className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col right-0 bg-white shadow-xl border-[1px]">
              <Link
                to={`/brands/${brand?.id}`}
                className="text-sm text-left px-5 py-2"
                onClick={close}
              >
                View Details
              </Link>
              {brand?.status === "inActive" || brand?.status === "pending" ? (
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() =>
                    handleActivateDeactivateBrand(brand?.id, "active")
                  }
                >
                  Activate
                </button>
              ) : null}
              {brand?.status === "active" || brand?.status === "pending" ? (
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() =>
                    handleActivateDeactivateBrand(brand?.id, "inActive")
                  }
                >
                  Deactivate
                </button>
              ) : null}
            </div>
          )} */}
        </div>
      </td>
    </tr>
  );
}

export default BrandRequestsRowTemplate;
