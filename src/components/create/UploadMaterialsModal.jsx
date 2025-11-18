import { IoMdClose } from "react-icons/io";
import CustomFormik from "../forms/CustomFormik"
import VideoUploadField from "../forms/VideoUploadField";


const UploadMaterialsModal = ({ show, onClose }) => {

  const handleBulkUpload = async () => (console.log("Uploaded"));

  const initialValues = null;
  const validationSchema = null;

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold text-sm mb-3">Bulk Upload Categories</div>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleBulkUpload}
        >
            <VideoUploadField name="video" label="Upload Video" />

          {/* <div className="flex flex-col gap-3">
            <span className="text-sm text-merseLightText mb-4">
              Upload a CSV file with your categories. The file should have{" "}
              <span className="font-semibold">category name</span> column.
            </span>
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
          </div> */}
        </CustomFormik>
      </div>
    </div>
  )
}

export default UploadMaterialsModal