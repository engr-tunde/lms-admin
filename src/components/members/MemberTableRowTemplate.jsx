import StatusCheck from "../globals/StatusCheck";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import AppFormButton from "../forms/buttons/AppFormButton";
import {
  dateFormatter,
  errorNotification,
  successNotification,
} from "../../utils/helpers";
import { deleteAdmin } from "../../api";

function MemberTableRowTemplate(member, i) {
  const [actionOpen, setActionOpen] = useState(null);
  const [isSubmitting, setisSubmitting] = useState(false);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  const handleRemoveMember = async (id) => {
    setisSubmitting(true);
    const response = await deleteAdmin(id);
    console.log("response", response);
    if (response.status.toString().includes("20")) {
      successNotification(response.data.message);
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <tr key={member._id} className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm flex flex-col items-start">
        <span className="text-lg">{member.fullName}</span>
        <span className="text-merseLightText">{member.email}</span>
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
          value={member?.isActive ? "Active" : "InActive"}
          className="px-2 py-1"
        />
      </td>
      <td className="py-6 text-sm text-merseLightText hidden lg:table-cell">
        {dateFormatter(member.createdAt)}
      </td>
      <td className="py-6 text-sm text-right text-merseLightText">
        <div className="relative cursor-pointer">
          <button onClick={() => handleActionClick(i)}>
            <IoEllipsisVertical size={20} />
          </button>
          {actionOpen === i && (
            <div className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col top-6 right-0 bg-white shadow-xl">
              <button
                className={`btnn1-disabled py-2 text-center text-sm font-medium ${
                  isSubmitting && "opacity-50"
                }`}
                onClick={() =>
                  isSubmitting ? null : handleRemoveMember(member?._id)
                }
              >
                {isSubmitting ? "Deleting..." : "Remove member"}
              </button>

              <AppFormButton
                title="Activate member"
                // className={"text-xs"}
                // type="submit"
                isSubmitting={false}
                disabled={true}
              />
              <AppFormButton
                title="Remove member"
                // className={"text-xs"}
                // type="submit"
                isSubmitting={false}
                disabled={true}
              />
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default MemberTableRowTemplate;
