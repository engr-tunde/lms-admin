import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { payoutColumnHeader } from "../../data/payoutData.js";
import PayoutRowTemplate from "./PayoutTableRowTemplate.jsx";
import { useState } from "react";


function PayoutTable({ filteredData, setfilteredData, originalArr, mutate, nextDueDate }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All payout</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={["brand.name", "status"]}
            />
        </div>
      </div>
      <Table 
      columns={payoutColumnHeader}
      renderRow={(payout, i) => (
          <PayoutRowTemplate
            key={payout?._id}
            payout={payout}
            i={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            mutate={mutate}
            nextDueDate={nextDueDate}
          />
        )}
      data={filteredData}
      />
    </div>
  );
}

export default PayoutTable;
