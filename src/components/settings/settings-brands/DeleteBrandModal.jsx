import { IoMdClose }from "react-icons/io";
import AppFormButton from "../../forms/buttons/AppFormButton";


const DeleteBrandModal = ({ show, onClose, brandToDelete }) => {
  if (!show) return null;
  
  
//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       await axios.post(endpoint, values);
//       alert(`${type === "category" ? "Category" : "Adjustment"} added!`);
//       resetForm();
//       onClose();
//     } catch (error) {
//       console.error("Submission error:", error);
//     }
//   };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/3 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold text-sm">
          Delete Brand Type
        </div>
        <div className="flex justify-between gap-4 h-full">
          <div className="w-full h-full text-sm">
            {`Are you sure you want to delete "${brandToDelete}"? This might affect the brands that have selected it`}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 border-2 text-sm"
          >
            Cancel
          </button>
          <AppFormButton 
            title="Delete"
            className="px-3 py-1 text-white bg-red-600 text-sm"
            // type="submit"
            isSubmitting={false}
            disabled={true}
          />
        </div>
      </div>
    </div>
  )
}

export default DeleteBrandModal

// AppFormButton = ({ title, className, isSubmitting, disabled })