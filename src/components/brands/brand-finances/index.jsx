import BrandFinanceTable from "./BrandFinanceTable.jsx";
import BrandFinanceCardContainer from "./BrandFinanceCardContainer.jsx";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

function BrandFinancePage() {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">June</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div> 
      <BrandFinanceCardContainer />
      <BrandFinanceTable />
    </>
  );
}

export default BrandFinancePage;