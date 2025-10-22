export const orderDisputeTableColumn = [
    {
        header: "", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Dispute ID", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Order ID", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    // {
    //     header: "Customer", 
    //     className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    // }, 
    {
        header: "Brand", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Issue type", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Status", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Disputed on", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    },
    {
        header: "Last updated", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Urgency level", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
]


export const orderDisputeData = [
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
        urgencyLevel: "High" 
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
        urgencyLevel: "High" 
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
        urgencyLevel: "Medium" 
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
        urgencyLevel: "High" 
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
        urgencyLevel: "Low" 
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
        urgencyLevel: "Medium" 
    }, 
]





export const payoutDisputeTableColumn = [
    {
        header: "", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Dispute ID", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Order ID", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Brand", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Issue type", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Status", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Disputed on", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    },
    {
        header: "Last updated", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }
]


export const payoutDisputeData = [
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
]




export const orderDisputeViewTableData = [
    {
        id: 1, 
        image: "/assets/images/product-placeholder.png",
        product: "Off-White Grateful SS T-shirt", 
        quantity: 2, 
        unitPrice: 60000, 
        color: "Blue", 
        size: "lg"
    }, 
    {
        id: 2,
        image: "/assets/images/product-placeholder.png",
        product: "Off-White Grateful SS T-shirt", 
        quantity: 1, 
        unitPrice: 10000, 
        color: "Yellow", 
        size: "S"
    }, 
    {
        id: 3,
        image: "/assets/images/product-placeholder.png",
        product: "Off-White Grateful SS T-shirt", 
        quantity: 5, 
        unitPrice: 2000, 
        color: "Red", 
        size: "md"
    },    
]

export const orderDisputeViewTableColumnHeader = [
  {
    header: "Product", 
    className: "hidden lg:table-cell"
  },
  {
    header: "Price per item", 
    className: "hidden lg:table-cell"
  },
]