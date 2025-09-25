// New Brands Data Added for the Brands Table
export const brandsTableColumnHeader = [
  {
    header: "",
    className:
      "hidden lg:table-cell text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Brand",
    className: "text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Products",
    className:
      "hidden lg:table-cell text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Total Sales",
    className:
      "hidden lg:table-cell text-sm font-medium text-merseLightText tracking-wider",
  },
  {
    header: "Orders",
    className:
      "hidden lg:table-cell text-sm font-medium text-merseLightText tracking-wider",
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
  {
    header: "Actions",
    className: "text-sm font-medium text-merseLightText tracking-wider",
  },
];
export const brandsTableData = [
  {
    id: 1,
    brandName: "Brenda Alli",
    products: 4,
    totalSales: 2541.4,
    orders: 2,
    status: "pending",
    createdAt: "25/09/2025",
  },
  {
    id: 2,
    brandName: "Shakara Vogue",
    products: 4,
    totalSales: 2541.4,
    orders: 2,
    status: "active",
    createdAt: "25/09/2025",
  },
];

export const brandsOrderTableColumnHeader = [
  {
    header: "",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Order ID",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Customer Name",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Brand",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Product",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Qty",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Order status",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Total amount",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Actions",
    className:
      "text-sm font-medium text-merseLightText",
  },
];

export const brandsOrderTableData = [
  {
    id: 1,
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    product: "Off-White Grateful SS T-shirt",
    quantity: 2,
    orderStatus: "Awaiting confirmation",
    totalAmount: 120000,
  },
  {
    id: 2,
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    product: "Off-White Grateful SS T-shirt",
    quantity: 1,
    orderStatus: "Awaiting confirmation",
    totalAmount: 10000,
  },
  {
    id: 3,
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    product: "Off-White Grateful SS T-shirt",
    quantity: 12,
    orderStatus: "Active",
    totalAmount: 10000,
  },
  {
    id: 4,
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    product: "Off-White Grateful SS T-shirt",
    quantity: 2,
    orderStatus: "Awaiting confirmation",
    totalAmount: 20000,
  },
  {
    id: 5,
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    product: "Off-White Grateful SS T-shirt",
    quantity: 2,
    orderStatus: "Awaiting confirmation",
    totalAmount: 5000,
  },
  {
    id: 6,
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    product: "Off-White Grateful SS T-shirt",
    quantity: 2,
    orderStatus: "Active",
    totalAmount: 120000,
  },
];

// BrandsFinance Data added for the Brand Finance Table

export const brandFinanceTableColumnHeader = [
  {
    header: "",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Payout ID",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Month",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Payout date",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Time period",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Net payout",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Payment status",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "",
    className:
      "text-sm font-medium text-merseLightText",
  },
];

export const brandFinanceTableData = [
  {
    id: 1,
    payoutID: "#P - 245681",
    month: "July",
    payoutDate: "31/Jul/2025",
    timePeriod: "Jul 1 - Jul 31",
    netPayout: 15000,
    paymentStatus: "Failed",
  },
  {
    id: 2,
    payoutID: "#P - 245681",
    month: "June",
    payoutDate: "31/Jun/2025",
    timePeriod: "Jun 1 - Jun 30",
    netPayout: 15000,
    paymentStatus: "Completed",
  },
  {
    id: 3,
    payoutID: "#P - 245681",
    month: "May",
    payoutDate: "31/May/2025",
    timePeriod: "May 1 - May 31",
    netPayout: 15000,
    paymentStatus: "Completed",
  },
  {
    id: 4,
    payoutID: "#P - 245681",
    month: "Apr",
    payoutDate: "31/Apr/2025",
    timePeriod: "Apr 1 - Apr 31",
    netPayout: 15000,
    paymentStatus: "Completed",
  },
  {
    id: 5,
    payoutID: "#P - 245681",
    month: "Feb",
    payoutDate: "28/Feb/2025",
    timePeriod: "Feb 1 - Feb 28",
    netPayout: 15000,
    paymentStatus: "Pending",
  },
  {
    id: 6,
    payoutID: "#P - 245681",
    month: "Jan",
    payoutDate: "31/Jan/2025",
    timePeriod: "Jan 1 - Jan 31",
    netPayout: 15000,
    paymentStatus: "Pending",
  },
];

// BrandsDispute Data added for the BrandDispute Table

export const brandDisputeOrderTableColumn = [
  {
    header: "",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Dispute ID",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Order ID",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Customer",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Brand",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Issue type",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Status",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Disputed on",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Last updated",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Urgency level",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
];

export const brandDisputeOrderData = [
  {
    id: 1,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    issueType: "Unable to fulfill order",
    status: "Rejected",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
    urgencyLevel: "High",
  },
  {
    id: 2,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    issueType: "Delivery delay",
    status: "In review",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
    urgencyLevel: "Medium",
  },
  {
    id: 3,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    issueType: "Cancel order",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
    urgencyLevel: "Low",
  },
  {
    id: 4,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    issueType: "Shipping delay",
    status: "Resolved",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
    urgencyLevel: "High",
  },
  {
    id: 5,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    issueType: "Shipping delay",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
    urgencyLevel: "High",
  },
  {
    id: 6,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    customer: "Brenda Alli",
    brand: "StylishCo",
    issueType: "Shipping delay",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
    urgencyLevel: "Low",
  },
];

export const brandDisputePayoutTableColumn = [
  {
    header: "",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Dispute ID",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Order ID",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Brand",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Issue type",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Status",
    className:
      "text-sm font-medium text-merseLightText",
  },
  {
    header: "Disputed on",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
  {
    header: "Last updated",
    className:
      "text-sm font-medium text-merseLightText hidden lg:table-cell",
  },
];

export const brandDisputePayoutData = [
  {
    id: 1,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    brand: "StylishCo",
    issueType: "Missing payout",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
  },
  {
    id: 2,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    brand: "StylishCo",
    issueType: "Delay in payout",
    status: "In review",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
  },
  {
    id: 3,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    brand: "StylishCo",
    issueType: "Amount mismatch",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
  },
  {
    id: 4,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    brand: "StylishCo",
    issueType: "Delay in payout",
    status: "Resolved",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
  },
  {
    id: 5,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    brand: "StylishCo",
    issueType: "Delay in payout",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
  },
  {
    id: 6,
    disputeID: "ORD12344",
    orderID: "ORD12344",
    brand: "StylishCo",
    issueType: "Missing payout",
    status: "Open",
    disputedOn: "2023-02-01",
    lastUpdated: "2023-02-01",
  },
];
