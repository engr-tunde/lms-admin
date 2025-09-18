import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandOverviewCardContainer from "./BrandOverviewCardContainer"
import NewOrderBrandsCardContainer from "./NewOrderCardBrandsContainer"
import AddedProductBrandsCardContainer from "./AddedProductBrandsCardContainer";

function BrandsOverviewPage() {
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
      <BrandOverviewCardContainer />
      <NewOrderBrandsCardContainer />
      <AddedProductBrandsCardContainer/>
    </>
  );
}

export default BrandsOverviewPage;
