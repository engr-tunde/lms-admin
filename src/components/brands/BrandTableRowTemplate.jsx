import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { formatter } from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck.jsx"

function BrandTableRowTemplate(brand) {
  return (
    <tr key={brand?.id} className="border-1 border-t border-merseBorder">
      <td className="hidden lg:table-cell py-4 text-sm px-2 text-center">
        <Link to={`/brands/${brand?.id}`} className="px-3 py-1 underline">
          View
        </Link>
      </td>
      {/* <td className="py-4 text-sm px-2 text-center">{brand.brandID}</td> */}
      <td className="py-4 text-sm ">{brand?.name}</td>
      <td className="hidden lg:table-cell py-4 text-sm ">{brand?.products}</td>
      <td className="hidden lg:table-cell py-4 text-sm ">
        {formatter(brand.totalSales)}
      </td>
      <td className="hidden lg:table-cell py-4 text-sm ">{brand?.orders}</td>
      <td className="">
        <StatusCheck
          value={brand?.status}
          className="text-sm py-1 px-2 rounded-sm"
        />
      </td>
      <td className="hidden lg:table-cell py-4 text-sm ">{brand.created_at}</td>
      <td className="p-4">
        <div className="relative">
          <button className="flex text-sm items-center gap-1 px-3 py-1 border">
            Action
            <FaChevronDown size={10} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default BrandTableRowTemplate;
