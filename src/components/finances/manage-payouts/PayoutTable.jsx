import { ChevronDownIcon, DownloadIcon } from "../../globals/Icons";
import TableSearch from "../../globals/TableSearch";
import { payoutsColumnHeader, payoutsData } from "../../../data/payoutsData";
import PayoutRowTemplate from "./PayoutRowTemplate";
import Table from "../../globals/Table";
import { useState } from "react";
import StatusFilter from "../../globals/StatusFilter";

const PayoutTable = () => {
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');


  const payoutStatus = [
    { title: "All", value: "all" },
    { title: "Completed", value: "completed" },
    { title: "Pending", value: "pending" },
    { title: "Processing", value: "processing" },
    { title: "Failed", value: "failed" },
  ];

  const filteredPayouts = payoutsData.filter(payout => {
    if (filterStatus !== 'all' && payout.status !== filterStatus) return false;
    if (filterPeriod === 'month') {
      const payoutDate = new Date(payout.date);
      const now = new Date();
      return payoutDate.getMonth() === now.getMonth();
    }
    if (filterPeriod === 'quarter') {
      const payoutDate = new Date(payout.date);
      const now = new Date();
      const monthDiff = now.getMonth() - payoutDate.getMonth();
      return monthDiff >= 0 && monthDiff < 3;
    }
    return true;
  });
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch />
        </div>

        <div className="flex items-center gap-3">
          <StatusFilter
            filter={filterStatus} 
            setFilter={setFilterStatus} 
            filterArr={payoutStatus} 
          />
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <Table
        renderRow={(item) => (
          <PayoutRowTemplate
            key={item?.id}
            payout={item}
          />
        )}
        columns={payoutsColumnHeader}
        data={filteredPayouts}
      />
    </div>
  );
}

export default PayoutTable;