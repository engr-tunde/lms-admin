const BrandsComplianceOverview = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <button 
        className={`border-b-2 flex flex-col flex-1 px-4 pt-5 text-left ${
          activeTab === "complianceDocuments" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("complianceDocuments")}
      >
        <span className="text-md font-semibold">Compliance documents</span>
        <span className="text-merseLightText text-sm">Review submitted information</span>
      </button>
      <button
        className={`border-b-2 flex flex-col flex-1 px-4 pt-5 text-left ${
          activeTab === "brandDetails" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("brandDetails")}
      >
        <span className="text-sm font-semibold">Brand details</span>
        <span className="text-merseLightText text-sm">e.g company registration and details</span>
      </button>
      <button 
        className={`border-b-2 flex flex-col flex-1 px-4 pt-5 text-left ${
          activeTab === "shippingDetails" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("shippingDetails")}
      >
        <span className="text-sm font-semibold">Shipping details</span>
        <span className="text-merseLightText text-sm">e.g delivery addresses and logistics info</span>
      </button>
      <button 
        className={`border-b-2 flex flex-col flex-1 px-4 pt-5 text-left ${
          activeTab === "contactPerson" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("contactPerson")}
      >
        <span className="text-sm font-semibold">Contact person</span>
        <span className="text-merseLightText text-sm">e.g authorized representative details</span>
      </button>
      <button 
        className={`flex flex-col flex-1 px-4 pt-5 text-left ${
          activeTab === "businessDocument" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("businessDocument")}
      >
        <span className="text-sm font-semibold">Business document</span>
        <span className="text-merseLightText text-sm">e.g licenses, certificates and legal filings</span>
      </button>        
    </>
  )
}

export default BrandsComplianceOverview;