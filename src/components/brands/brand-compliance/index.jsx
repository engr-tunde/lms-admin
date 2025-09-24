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
    <div className="w-full h-full lg:h-[450px] flex flex-col lg:flex-row gap-5">
      <BrandsComplianceOverview activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full lg:w-2/3 border-2 h-full">
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