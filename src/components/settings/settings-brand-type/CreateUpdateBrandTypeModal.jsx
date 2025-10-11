import { IoMdClose }from "react-icons/io";
import { validateAddBrandTypeValues } from "../../../utils/validate"
import { addBrandTypeValues } from "../../../utils/initialValues"
import CustomModal from "../../globals/Modals"
import { addBrandType, updateBrandType } from "../../../api"
import { errorNotification, successNotification } from "../../../utils/helpers";

const CreateUpdateBrandTypeModal = ({ show, onClose, mutate, isEdit=false, updateData = {} }) => {
  if (!show) return null;

  const initialValues = isEdit ? {
    brandType: updateData?.name || "",
    description: updateData?.description || "",
  } : addBrandTypeValues();

  const validationSchema = validateAddBrandTypeValues()

  const handleSubmit = async (values) => {

    try {
      let response; 

      if (isEdit) {
        response = await updateBrandType( {
          name: values.brandType, description: values.description
        }, updateData.id)
      } else {
        response = await addBrandType({ name: values.brandType, description: values.description });
      }

      if (response.status.toString().includes("20")) {
        successNotification(response.data?.message || (isEdit ? "Brand updated successfully" : "Brand created successfully"));
        onClose();
        mutate()
      } else {
        errorNotification(response?.data?.message || "Error creating brand");
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
            {isEdit ? "Update Brand Type" : "Create Brand Type"}
          </div>
          <CustomModal
            show={show}
            onClose={onClose}
            fields={addBrandTypeFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            title={isEdit ? "Edit Brand Type" : "Create Brand Type"}
            description=""
            submitButtonTitle={isEdit ? "Update" : "Create"}
          />
      </div>
    </div>
  )
}


export const addBrandTypeFields = [
  {
    type: "text",
    name: "brandType",
    placeholder: "Brand Type",
    colSpan: 2,
  },
  {
    type: "text",
    name: "description",
    placeholder: "Brand Type Description",
    colSpan: 2,
  },
];


export default CreateUpdateBrandTypeModal

