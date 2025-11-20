import StatusCheck from "../globals/StatusCheck";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import {
  dateFormatter,
  errorNotification,
  successNotification,
  useToggleOpen,
} from "../../utils/helpers";
import { updateAdminStatus } from "../../api";

function MemberTableRowTemplate({ member, i, openIndex, setOpenIndex, mutate }) {
  const [isTogglingStatus, setisTogglingStatus] = useState(false);
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);

  const updateMemberStatus = async (id) => {
    try {
      setisTogglingStatus(true);
      const newStatus = member?.isActive ? "DEACTIVATE" : "ACTIVATE";
      const response = await updateAdminStatus(id, { status: newStatus });
      if (response.status.toString().includes("20")) {
        successNotification(response.data.message);
        mutate()
      } else {
        errorNotification(response?.data?.message);
      }
    } finally {
      setisTogglingStatus(false);
      close()
    }
  }

  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm flex flex-col items-start">
        <span className="text-lg">{member?.name}</span>
        <span className="text-merseLightText">{member?.email}</span>
      </td>
      <td className="py-6 text-sm">
        {member.role === "finance_manager"
          ? "Finance Manager"
          : member.role === "brand_manager"
          ? "Brand Manager"
          : member.role === "operations_manager"
          ? "Operations Manager"
          : null}
      </td>
      <td className="py-6 text-sm">
        <StatusCheck
          value={member?.isActive ? "Active" : "Inactive"}
          className="px-2 py-1"
        />
      </td>
      <td className="py-6 text-sm text-merseLightText hidden lg:table-cell">
        {dateFormatter(member?.createdAt)}
      </td>
      <td className="py-6 text-sm text-right text-merseLightText">
        <div 
          className="relative cursor-pointer"
          ref={ref}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {isOpen && (
            <div 
              className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col top-6 right-0 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`btnn1-disabled py-2 text-center text-sm font-medium`}
                disabled={isTogglingStatus}
                onClick={() => updateMemberStatus(member?._id)}
              >
                {
                  isTogglingStatus ?
                  member?.isActive ? "Disabling..." : "Activating..." :
                  member?.isActive ? "Disable member" : "Activate member"
                }
              </button>
              {/* <button
                className={`btnn1-disabled py-2 text-center text-sm font-medium ${
                  isSubmitting && "opacity-50"
                }`}
                onClick={() => handleRemoveMember(member?._id)}
              >
                {isSubmitting ? "Deleting..." : "Remove member"}
              </button> */}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default MemberTableRowTemplate;
