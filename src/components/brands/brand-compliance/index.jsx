import { useState } from "react";

import BrandsComplianceOverview from "./BrandComplianceOverview";
import BrandComplianceDocuments from "./BrandComplianceDocuments"
import BrandComplianceDetails from "./BrandComplianceDetails";
import BrandShippingDetails from "./BrandShippingDetails"
import BrandContactPerson from "./BrandContactPerson";
import BrandBusinessDocument from "./BrandBusinessDocument";
import RejectFormModal from "./RejectFormModal";
import { fetchBrand, verifyBrand } from "../../../api";
import { errorNotification, successNotification } from "../../../utils/helpers";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import NoDataPage from "../../globals/NoDataPage";


const BrandsCompliancePage = ({ brandId, verified }) => {
  const [activeTab, setActiveTab] = useState("complianceDocuments")
  const [showRejectForm, setShowRejectForm] = useState(false);

  const {brand, brandLoading, brandError, mutate} = fetchBrand(brandId);
  console.log("brand in compliance", brand)

  if (brandLoading) return <Loader />;
  if (brandError) return <ErrorWidget error={brandError} />;
  if (!brand) return <NoDataPage message="No information available for this brand" />;

  const handleVerifyBrand = async () => {
    const response = await verifyBrand(
      {
        status: "accept",
      },
      brandId
    );
    if (response?.status?.toString()?.includes("20")) {
      successNotification(response?.data?.message);
      mutate()
    } else {
      errorNotification(response?.data?.message[0]);
    }
  };

  return (
    <>
    <div className="w-full h-full lg:h-[450px] flex flex-col lg:flex-row gap-5">
      <BrandsComplianceOverview activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full lg:w-2/3 border-2 h-full">
        {SetActivePage(activeTab, brand)}
      </div>
    </div>  
    <div className="flex justify-end gap-5">
      {!verified && ( 
      <>
      <button 
        className="px-3 py-1 text-sm bg-black text-white"
        onClick={handleVerifyBrand}
      >
        Approve
      </button>
      <button 
        className="border-2 px-3 py-1 text-sm"
        onClick={() =>
          setShowRejectForm(true)
        }
      >
        Reject
      </button>
      </>
      )}
    </div>
    <RejectFormModal show={showRejectForm} onClose={() => setShowRejectForm(false)} brandId={brandId} />
    </>  
  )
}

const SetActivePage = (activeTab, brand) => {
   if (activeTab === "complianceDocuments") return <BrandComplianceDocuments brand={brand} />
   if (activeTab === "brandDetails") return <BrandComplianceDetails brand={brand} />
   if (activeTab === "shippingDetails") return <BrandShippingDetails brand={brand} />
   if (activeTab === "contactPerson") return <BrandContactPerson brand={brand} />
   if (activeTab === "businessDocument") return <BrandBusinessDocument brand={brand} />
};



export default BrandsCompliancePage;