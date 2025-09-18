import TableSearch from "../../globals/TableSearch.jsx"
import Table from "../../globals/Table.jsx"
import { brandDisputeOrderTableColumn, brandDisputeOrderData } from "../../../data/brandsData.js";
import BrandDisputeOrderRowTemplate from "./BrandDisputeOrderRowTemplate.jsx";

function BrandDisputeOrderTable({ activeTab, setActiveTab}) {
//   const [activeTab, setActiveTab] = useState("Order Dispute")
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold flex gap-2 text-md items-end">
            <button 
            onClick={() => setActiveTab("Order Dispute")}
            className={`px-3 py-1 rounded ${
                activeTab === "Order Dispute" ? "text-black" : "text-merseBorder"
            }`}
            >
                Order Dispute
            </button>
            <button 
            onClick={() => setActiveTab("Payout Dispute")}
            className={`px-3 py-1 rounded ${
                activeTab === "Payout Dispute" ? "text-black" : "text-merseBorder"
            }`}
            >
                Payout Dispute
            </button>
        </div>
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
      </div>
      <Table 
      columns={brandDisputeOrderTableColumn}
      renderRow={BrandDisputeOrderRowTemplate}
      data={brandDisputeOrderData}
      />
    </div>
  );
}

export default BrandDisputeOrderTable;