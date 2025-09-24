const BrandsComplianceOverview = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full lg:w-1/3 border-2 flex flex-row lg:flex-col">
      <button 
        className={`lg:border-b-2 flex flex-col flex-1 px-4 py-4 text-left ${
          activeTab === "complianceDocuments" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("complianceDocuments")}
      >
        <span className="text-sm font-semibold">Compliance documents</span>
        <span className="text-merseLightText text-sm hidden lg:block">Review submitted information</span>
      </button>
      <button
        className={`lg:border-b-2 flex flex-col flex-1 px-4 py-4 text-left ${
          activeTab === "brandDetails" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("brandDetails")}
      >
        <span className="text-sm font-semibold">Brand details</span>
        <span className="text-merseLightText text-sm hidden lg:block">e.g company registration and details</span>
      </button>
      <button 
        className={`lg:border-b-2 flex flex-col flex-1 px-4 py-4 text-left ${
          activeTab === "shippingDetails" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("shippingDetails")}
      >
        <span className="text-sm font-semibold">Shipping details</span>
        <span className="text-merseLightText text-sm hidden lg:block">e.g delivery addresses and logistics info</span>
      </button>
      <button 
        className={`lg:border-b-2 flex flex-col flex-1 px-4 py-4 text-left ${
          activeTab === "contactPerson" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("contactPerson")}
      >
        <span className="text-sm font-semibold">Contact person</span>
        <span className="text-merseLightText text-sm hidden lg:block">e.g authorized representative details</span>
      </button>
      <button 
        className={`flex flex-col flex-1 px-4 py-4 text-left ${
          activeTab === "businessDocument" ? "bg-gray-200/50" : "bg-white"
        }`}
        onClick={() => setActiveTab("businessDocument")}
      >
        <span className="text-sm font-semibold">Business document</span>
        <span className="text-merseLightText text-sm hidden lg:block">e.g licenses, certificates and legal filings</span>
      </button>        
    </div>
  )
}

export default BrandsComplianceOverview;