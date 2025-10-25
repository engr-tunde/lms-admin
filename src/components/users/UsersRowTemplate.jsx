import StatusCheck from '../globals/StatusCheck'
import { Link } from "react-router-dom";
import { capitalize, formatter, useToggleOpen } from "../../utils/helpers";
import { RiArrowDownSFill } from 'react-icons/ri';


function UsersRowTemplate({user, i, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);
  
  return (
    <tr key={user?._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">{capitalize(user?.fullName)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{user?.email}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{9}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{formatter(2300)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {"23-10-2025"}
      </td>
      <td className="">
        <StatusCheck value={"Active"} className="text-sm px-2 py-1"/>
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
                <button 
                  className={`flex items-center gap-1`}
                //   onClick={}
                >
                 {"Suspend User"}
                </button>
                <Link to={`/orders/${order._id}`}className="flex items-center gap-1">
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
