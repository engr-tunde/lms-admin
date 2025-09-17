// import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";
import MemberStatusCheck from "./MemberStatusCheck";

function MemberTableRowTemplate(member) {
  return (
    <tr key={member.id} className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm text-center flex flex-col items-start">
        <span className="text-lg">{member.name}</span>
        <span className="text-merseLightText">{member.email}</span>
      </td>
      <td className="py-6 text-sm text-center">{member.role}</td>
      <td className="py-6 text-sm text-center">
        <MemberStatusCheck value={member.status} className="px-2 py-1"/>
      </td>
      <td className="py-6 text-sm text-center text-merseLightText">{member.dateCreated}</td>
    </tr>
  );
}

export default MemberTableRowTemplate;
