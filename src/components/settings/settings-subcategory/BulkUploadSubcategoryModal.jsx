import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import SubmitButton from "../../forms/SubmitButton";
import { Field, useFormikContext } from "formik";
import CustomFormik from "../../forms/CustomFormik"
import { errorNotification, successNotification } from "../../../utils/helpers";
import CsvFileUploadField from "../../forms/CsvFileUploadField"



const BulkUploadSubcategoryModal = ({ show, onClose }) => {

  // const handleBulkUpload = async (values) => {
  //   const file = values.csvFile;
  //   if (!file) {
  //     errorNotification("Please upload a CSV file");
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   const response = await bulkUploadSubcategory(formData);
  //   if (response.status.toString().includes("20")) {
  //     console.log("Bulk upload response:", response);
  //     successNotification(  response.data?.message || "Subcategories uploaded successfully");
  //     onClose();
  //   } else {
  //     errorNotification(response?.data?.message || "Failed to upload subcategories");
  //   }
  // };

  // const initialValues = bulkUploadSubcategoryValues();
  // const validationSchema = validateBulkUploadSubcategoryValues();

  if (!show) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold text-sm mb-3">Bulk Upload Subcategories</div>
        <CustomFormik
          // initialValues={initialValues}
          // validationSchema={validationSchema}
          // onSubmit={handleBulkUpload}
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm text-merseLightText mb-4">
              Upload a CSV file with your subcategories. The file should have{" "}
              <span className="font-semibold">subcategory name</span> column.
            </span>

            <CsvFileUploadField name="subcategoryFile"/>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1 border-2 text-sm"
              >
                Cancel
              </button>
              <SubmitButton
                title="Upload"
                className="px-3 py-1 text-white bg-black text-sm"
              />
            </div>
          </div>
        </CustomFormik>
      </div>
    </div>
  )
}

export default BulkUploadSubcategoryModal