import MemberStatusCheck from "./MemberStatusCheck";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";


function MemberTableRowTemplate(member, i) {
  const [actionOpen, setActionOpen] = useState(null);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <tr key={member.id} className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm text-left flex flex-col items-start">
        <span className="text-lg">{member.name}</span>
        <span className="text-merseLightText">{member.email}</span>
      </td>
      <td className="py-6 text-sm text-center">{member.role}</td>
      <td className="py-6 text-sm text-center">
        <MemberStatusCheck value={member.status} className="px-2 py-1"/>
      </td>
      <td className="py-6 text-sm text-center text-merseLightText">{member.dateCreated}</td>
      <td className="py-6 text-sm text-right text-merseLightText">
        <div className="relative cursor-pointer">
          <button
           onClick={() => handleActionClick(i)}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {actionOpen === i && (
            <div className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col p-3 gap-3 top-6 right-0 bg-white shadow-xl">
              <div className="flex items-center gap-1">
                <span>Activate member</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Remove member</span>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default MemberTableRowTemplate;
