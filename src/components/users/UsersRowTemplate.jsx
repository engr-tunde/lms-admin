import StatusCheck from '../globals/StatusCheck'
import { Link } from "react-router-dom";
import { capitalize, formatter, useToggleOpen } from "../../utils/helpers";
import { RiArrowDownSFill } from 'react-icons/ri';


function UsersRowTemplate({user, i, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);
  
  return (
    <tr key={user?._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{capitalize(user?.fullName)}</td>
      <td className="py-4 text-sm">{user?.email}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{user?.totalOrders}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{formatter(user?.totalSpent).slice(0, -3)}</td>
      {user?.lastActive ? <td className="py-4 text-sm hidden lg:table-cell">
        {user?.lastActive}
      </td> : <td className="py-4 text-sm hidden lg:table-cell">N/A</td>}
      <td className="py-4">
        <div className="relative" ref={ref}>
          <button 
            className="flex text-sm items-center gap-1 px-3 py-1 border"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            Action
            <RiArrowDownSFill size={10} />
          </button>
          {isOpen && (
              <div 
               className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col p-3 gap-3 top-6 right-0 bg-white shadow-xl"
               onClick={(e) => e.stopPropagation()}
              > 
                <Link to={`/users/${user?._id}`} className="flex items-center gap-1" onClick={close}>
                  View Profile
                </Link>
              </div>
            )}
        </div>
      </td>
    </tr>
  );
}

export default UsersRowTemplate;
