import { IoMdClose }from "react-icons/io";
import { validateAddCollectionValues } from "../../../utils/validate"
import { addCollectionValues } from "../../../utils/initialValues"
import CustomModal from "../../globals/Modals"
import { addCollection, updateCollection } from "../../../api"
import { errorNotification, successNotification } from "../../../utils/helpers";

const CreateUpdateCollectionsModal = ({ show, onClose, mutate, isEdit = false, updateData = {} }) => {
  if (!show) return null;

  const initialValues = isEdit ? {
   collection: updateData?.name || "",
  } : addCollectionValues();

  const validationSchema = validateAddCollectionValues();


  const handleSubmit = async (values) => {

    try {
      let response; 

      if (isEdit) {
        response = await updateCollection( {
          name: values.collection
        }, updateData.id)
      } else {
        response = await addCollection({ name: values.collection });
      }

      if (response.status.toString().includes("20")) {
        successNotification(response.data?.message || (isEdit ? "Collection updated successfully" : "Collection created successfully"));
        onClose();
        mutate()
      } else {
        errorNotification(response?.data?.message || "Error creating collection");
      }
    } catch (err) {
      errorNotification(err.message || "Unexpected error");
    }
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/3 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
          <div className="font-semibold text-sm mb-3">
            {isEdit ? "Update Brand Collection" : "Create Brand Collection"}
          </div>
          <CustomModal
            show={show}
            onClose={onClose}
            fields={addCollectionFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            title={isEdit ? "Update Brand Collection" : "Create Brand Collection"}
            description=""
            submitButtonTitle={isEdit ? "Update" : "Create"}
          />
      </div>
    </div>
  )
}


export const addCollectionFields = [
  {
    type: "text",
    name: "collection",
    placeholder: "Collection name",
    colSpan: 2,
  },
];


export default CreateUpdateCollectionsModal

