import { useState } from "react";

import BrandsComplianceOverview from "./BrandComplianceOverview";
import BrandComplianceDocuments from "./BrandComplianceDocuments"
import BrandComplianceDetails from "./BrandComplianceDetails";
import BrandShippingDetails from "./BrandShippingDetails"
import BrandContactPerson from "./BrandContactPerson";
import BrandBusinessDocument from "./BrandBusinessDocument";


const BrandsCompliancePage = () => {
  const [activeTab, setActiveTab] = useState("complianceDocuments")

  return (
    <div className="w-full h-[450px] flex gap-5">
      <div className="w-1/3 border-2 flex flex-col">
        <BrandsComplianceOverview activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="w-2/3 border-2">
        {SetActivePage(activeTab)}
      </div>
    </div>    
  )
}

const SetActivePage = (activeTab) => {
   if (activeTab === "complianceDocuments") return <BrandComplianceDocuments />
   if (activeTab === "brandDetails") return <BrandComplianceDetails />
   if (activeTab === "shippingDetails") return <BrandShippingDetails />
   if (activeTab === "contactPerson") return <BrandContactPerson />
   if (activeTab === "businessDocument") return <BrandBusinessDocument />
};



export default BrandsCompliancePage;