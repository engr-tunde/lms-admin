import { brandFinanceTableColumnHeader, brandFinanceTableData } from "../../../data/brandsData.js";
import BrandFinanceRowTemplate from "./BrandFinanceRowTemplate.jsx"
import Table from "../../globals/Table.jsx";
import TableSearch from "../../globals/TableSearch.jsx";


function BrandFinanceTable({ filteredData, setfilteredData, originalArr }) {

  const itemsPerPage = admins?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Payout History</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={["status", "seller.email"]}
            />
        </div>
      </div>
      <Table 
      columns={brandFinanceTableColumnHeader}
      renderRow={(item, i) => (
        <BrandFinanceRowTemplate
          key={item?._id}
          item={item}
          i={i}
        />
      )}
      data={filteredData}
      />
      
    </div>
  );
}

export default BrandFinanceTable;
