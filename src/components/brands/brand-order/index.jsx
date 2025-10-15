import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandsOrderCardContainer from "./BrandsOrderCardContainer";
import BrandsOrderTable from "./BrandsOrderTable";
import { fetchBrandOrder } from "../../../api/index.js";

function BrandsOrderPage({ brandId }) {
  const { brandOrder, brandOrderLoading, brandOrderError } = fetchBrandOrder(brandId);
  console.log("brand orders", brandOrder);
  
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div> 
      <BrandsOrderCardContainer />
      <BrandsOrderTable />
    </>
  );
}

export default BrandsOrderPage;
