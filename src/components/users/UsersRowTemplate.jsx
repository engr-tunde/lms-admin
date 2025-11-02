import StatusCheck from '../globals/StatusCheck'
import { Link } from "react-router-dom";
import { capitalize, errorNotification, formatter, successNotification, useToggleOpen } from "../../utils/helpers";
import { RiArrowDownSFill } from 'react-icons/ri';
import { manageUser } from '../../api';
import { useEffect } from 'react';


function UsersRowTemplate({user, i, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);

  const manageUserAction = async (action) => {
      const response = await manageUser({ action }, user?._id);
      if (response?.status?.toString()?.includes("20")) {
        successNotification("Action completed successfully");
        mutate()
      } else {
        errorNotification(response?.data?.message[0]);
      }
    };
  
    useEffect(() => {
      if (user?.user) {
        setuserStatus(user?.user?.status);
      }
    }, [user?.user]);
  
  
  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{capitalize(user?.fullName)}</td>
      <td className="py-4 text-sm">{user?.email}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{user?.totalOrders}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{formatter(user?.totalSpent).slice(0, -3)}</td>
      {user?.lastActive ? <td className="py-4 text-sm hidden lg:table-cell">
        {user?.lastActive}
      </td> : <td className="py-4 text-sm hidden lg:table-cell">N/A</td>}
      <td className="py-4 text-sm hidden lg:table-cell">
        {user?.status ? <StatusCheck value={capitalize(user?.status)} className='px-3 py-1' /> : "N/A"}
      </td>
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
                {
                  user?.status === 'active' && (
                    <button 
                      className="flex items-center gap-1" 
                      onClick={() => {close(); manageUserAction('SUSPEND_USER')}}
                    >
                      Suspend User
                    </button>
                  )
                }
                {
                  user?.status === 'suspended' && (
                    <button 
                      className="flex items-center gap-1" 
                      onClick={() => {close(); manageUserAction('ACTIVATE_USER')}}
                    >
                      Activate User
                    </button>
                  )
                }
              </div>
            )}
        </div>
      </td>
    </tr>
  );
}

export default UsersRowTemplate;
