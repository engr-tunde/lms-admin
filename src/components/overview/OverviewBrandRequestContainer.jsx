// import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import OverviewBrandRequest from "./OverviewBrandRequests";
// import { formatter } from "../../utils/helpers";
import { FaChevronRight } from "react-icons/fa";
// import { TbTruckDelivery } from "react-icons/tb";

function OverviewBrandRequestContainer() {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Brand Requests</div>
        <div className="flex items-center cursor-pointer">
            <span className="mr-1 text-sm text-light">View all </span>
            <FaChevronRight size={10} />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        <OverviewBrandRequest
        title="StylishCO"
        product="Footwear"
        country="Nigeria"
        email="StylishCO@gmail.com"
        status="Pending"
        date="14 July, 2024"
        // size="sm"
        />

        <OverviewBrandRequest
        title="House of wears"
        product="Menswear"
        country="USA"
        email="houseofwears@gmail.com"
        status="Pending"
        date="15 July, 2024"
        />

        <OverviewBrandRequest
        title="My wears"
        product="Menswear"
        country="Ghana"
        email="StylishCO@gmail.com"
        status="Pending"
        date="14 July, 2024"
        />
      </div>
    </div>
  );
}

export default OverviewBrandRequestContainer;


// title, product, country, email, status, date, size = "normal" 