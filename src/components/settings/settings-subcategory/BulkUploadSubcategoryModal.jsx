import { useState } from "react";
import AppFormButton from "../../forms/buttons/AppFormButton";
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";



const BulkUploadSubcategoryModal = ({ show, onClose }) => {
  const [file, setFile] = useState(null)

  const uploadIcon = () => (
    <FiUpload size={30} className="text-merseBorder" />
  );

  if (!show) return null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold text-sm mb-3">Bulk Upload Subcategories</div>
        {!file ? (
          <>
            <span className="text-sm text-merseLightText mb-4">
              Upload a CSV file with your subcategories. The file should have{" "}
              <span className="font-semibold">subcategory name</span> column
            </span>
            <label 
              htmlFor=""
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex flex-col gap-1 items-center justify-center border border-gray-300 border-dashed rounded-md py-10 cursor-pointer hover:bg-gray-50"
            >
              <input 
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileChange}
               />
              {uploadIcon()}
              <span className="text-gray-500 text-sm">
                Drag and drop your CSV file here, or click to browse
              </span>
              <span className="text-xs text-gray-400 mt-1">
                Supports CSV files up to 5MB
              </span>
            </label>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1 border-2 text-sm"
              >
                Cancel
              </button>
              <AppFormButton 
                title="Upload"
                className="px-3 py-1 text-white bg-black text-sm"
                // type="submit"
                isSubmitting={false}
                disabled={!file}
              />
            </div>
          </>
        ) : (
          <>
            <div className="border border-gray-200 rounded-md py-6 px-4 text-center">
              <p className="text-gray-700 font-medium">File uploaded</p>
              <p className="text-sm text-gray-500 mt-1">{file.name}</p>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-3 py-1 border-2 text-sm"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default BulkUploadSubcategoryModal