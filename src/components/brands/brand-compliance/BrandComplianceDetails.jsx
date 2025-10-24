import { fetchBrandType } from "../../../api";
import { capitalize } from "../../../utils/helpers"
import { useEffect, useState } from "react";

const BrandComplianceDetails = ({ brand }) => {
  const [type, settype] = useState("");
  const { brandtype } = fetchBrandType();
  console.log("brandtype", brandtype);

  let pickedBrandType

  useEffect(() => {
    if (brandtype) {
      settype(brandtype?.filter(b => b?.id === brand?.brand_type?.id))
    }
  }, [brandtype, brand?.brand_type?.id])

  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-sm border-b-2 p-4">Brand details</div>
      <div className="w-full h-full flex flex-col">
        <span className="p-4 text-sm">Submitted information</span>
        <div className="w-full h-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100/50 p-4 w-full">
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Business Name</span>
              <span className="text-sm">{capitalize(brand?.name)}</span>
            </div>
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Country</span>
              <span className="text-sm">{capitalize(brand?.country) || "N/A"}</span>
            </div>
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Brand Type</span>
              <span className="text-sm">{type?.name || "N/A"}</span>
            </div>
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Brand registration number</span>
              <span className="text-sm">{brand?.registration_number || "N/A"}</span>
            </div>
            <div className="col-span-1 lg:col-span-2 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Company Address</span>
              <span className="text-sm">{brand?.company_address || "N/A"}</span>
            </div>
            <div className="col-span-1 lg:col-span-2 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Brand description</span>
              <span className="text-sm">{brand?.description || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandComplianceDetails