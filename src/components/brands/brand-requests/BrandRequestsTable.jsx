import { useState } from "react";
import TableSearch from "../../globals/TableSearch";
import BrandRequestsRowTemplate from "./BrandRequestsRowTemplate";
import Table from "../../globals/Table"

function BrandRequestsTable({ filteredData, setfilteredData, originalArr }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Brand Requests</div>
        <div className="flex items-center cursor-pointer">
          <TableSearch
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            searchable={["name"]}
           />
        </div>
      </div>
      <Table
        columns={brandsRequestsColumnHeader}
        renderRow={(request, i) => (
          <BrandRequestsRowTemplate
            key={request?._id}
            request={request}
            i={i}
          />
        )}
        data={filteredData}
      />
    </div>
  );
}

export default BrandRequestsTable;




export const brandsRequestsColumnHeader = [
  {
    header: "",
    className:
      "text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Brand",
    className: "text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Status",
    className: "text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Registered date",
    className:
      "hidden lg:table-cell text-sm font-medium text-merseLightText tracking-wider",
  },
];