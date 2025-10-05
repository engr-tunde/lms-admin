import { capitalize, dateFormatter } from "../../utils/helpers";
import BrandRequest from "./BrandRequests";
import { FaChevronRight } from "react-icons/fa";

function BrandRequestContainer({ brandsData }) {
  
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
        {brandsData?.length > 0 && 
          brandsData.map((brand, index) => (
            <BrandRequest data={brand} key={index} />
          ))}
      </div>
    </div>
  );
}

export default BrandRequestContainer;


// title, product, country, email, status, date, size = "normal" 