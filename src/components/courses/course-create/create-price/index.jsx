import { useState } from "react";
import PriceCard from "./PriceCard";
import CustomModal from "../../../globals/Modals";
import { coursePriceValues } from "../../../../utils/initialValues";
import { validateCoursePriceValues } from "../../../../utils/validate";
import SubmitButton from "../../../forms/SubmitButton";
import { addPricing } from "../../../../api";
import { errorNotification, successNotification } from "../../../../utils/helpers";
import { useParams } from "react-router-dom";



const CreatePrice = ({ course, onStepComplete, setActiveTab }) => {
  const { id } = useParams()

  console.log("course in CreatePrice", course)

  const initialValues = course 
    ? {
        ...coursePriceValues(),
        price: course?.price,
        currency: course?.currency,
        discount_percent: course?.discount_percent,
      }
    : coursePriceValues();
  const validationSchema = validateCoursePriceValues();

  const handleSubmit = async (values) => {
    const response = await addPricing(values, id)
    if (response.status.toString().includes("20")) {
      successNotification(response?.data?.message);
      onStepComplete();
    } else {
      errorNotification(response?.data?.message);
    }
  }

  return (
    <div className="space-y-6">
      <CustomModal
        title=""
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        description={""}
      >
        <PriceCard />
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setActiveTab('requirements')}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            ← Back to Requirements
          </button>
          <SubmitButton 
            title="Save and Preview →"
            className="continue-button"
          />
        </div>
      </CustomModal>
    </div>
  )
}

export default CreatePrice;



