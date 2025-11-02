import { FaChevronDown } from "react-icons/fa";
import { topBrandsColumnHeader, topBrandsTableData } from "../../data/analyticsData";
import { RiCalendarLine } from "react-icons/ri";
import Table from "../globals/Table"
import { formatter } from "../../utils/helpers";
import { fetchAnalyticsBrands } from "../../api";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import NoDataPage from "../globals/NoDataPage";

const AnalyticsTopBrandsTable = () => {
  const { analyticsBrands, analyticsBrandsLoading, analyticsBrandsError } = fetchAnalyticsBrands();
  
  if (analyticsBrandsLoading) return <Loader />;
  if (analyticsBrandsError) return <ErrorWidget error={analyticsBrandsError} />;
  if (!analyticsBrands.length) return <NoDataPage message={"Top brands data unavailable yet"} />;

  return (
    <div className="w-full p-3 border-[1px] border-merseBorder h-[400px] overflow-auto">
      <div className="w-full flex justify-between gap-5 mb-4">
          <div>Top Performing Brands</div>
        <div className="flex">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div>
    <Table 
      columns={topBrandsColumnHeader}
      renderRow={(item, i) => (
        <TopBrandsRowTemplate 
          key={i}
          item={item} 
          />
        )}
      data={analyticsBrands}
    />
    </div>
  )
}

export default AnalyticsTopBrandsTable;




const TopBrandsRowTemplate = ({ item, i }) => {
  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm pl-2">{i + 1}</td>
      <td className="py-4 text-sm">{item?.brandName}</td>
      <td className="py-4 text-sm">{formatter(item?.totalSales)}</td>
      <td className="py-4 text-sm">{item?.orderFrequency}</td>
      <td className="py-4 text-sm">{item?.AOV}</td>
    </tr>
  )
}