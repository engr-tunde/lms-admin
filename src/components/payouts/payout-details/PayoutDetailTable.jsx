import { useState } from "react";
import {
  payoutDetailTableData,
  payoutDetailColumnHeader,
} from "../../../data/payoutData";
import Table from "../../globals/Table";
import TableSearch from "../../globals/TableSearch";
import PayoutDetailRowTemplate from "./PayoutDetailRowTemplate";

const PayoutDetailTable = ({ filteredData, setfilteredData, originalArr, mutate, commission }) => {
  console.log("filteredData", filteredData)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between items-end">
        <span className="font-semibold">Orders included in payout</span>
        <TableSearch 
          filteredData={filteredData}
          setfilteredData={setfilteredData}
          originalArr={originalArr}
          searchable={["items.productName", "brand.name"]}
        />
      </div>
      <Table
        columns={payoutDetailColumnHeader}
        renderRow={(item, i) => (
          <PayoutDetailRowTemplate
            key={item._id}
            item={item}
            i={i}
            mutate={mutate}
            commission={commission}
          />
        )}
        data={filteredData}
      />
    </div>
  );
};

export default PayoutDetailTable;
