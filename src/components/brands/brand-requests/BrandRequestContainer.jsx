import { FaChevronRight } from "react-icons/fa";
import BrandRequestsCard from "./BrandRequestsCard";
import { Link } from "react-router-dom";

function BrandRequestContainer({ requests }) {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Brand Requests</div>
        <Link to="/brands/requests"className="flex items-center cursor-pointer">
            <span className="mr-1 text-sm text-light">View all </span>
            <FaChevronRight size={10} />
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        {requests?.length > 0 && 
          requests?.slice(0, 3)?.map((request, index) => (
            <BrandRequestsCard data={request} key={index} />
          ))}
      </div>
    </div>
  );
}

export default BrandRequestContainer;