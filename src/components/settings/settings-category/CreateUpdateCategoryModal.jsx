import { IoMdClose }from "react-icons/io";
import { validateAddCategoryValues } from "../../../utils/validate"
import { addCategoryValues } from "../../../utils/initialValues"
import CustomModal from "../../globals/Modals"
import { addCategory, updateCategory } from "../../../api"
import { errorNotification, successNotification } from "../../../utils/helpers";

const CreateUpdateCategoryModal = ({ show, onClose, mutate, isEdit = false, updateData = {} }) => {
  if (!show) return null;

  const initialValues = isEdit ? {
   category: updateData?.name || "",
  } : addCategoryValues();

  const validationSchema = validateAddCategoryValues()

  const handleSubmit = async (values) => {
    try {
      let response; 

      if (isEdit) {
        response = await updateCategory( {
          name: values.category
        }, (updateData.id || updateData._id))
      
      } else {
        const categoriesArray = values.category
          .split(/[\n,]+/)
          .map((item) => item.trim())
          .filter(Boolean);

        if (categoriesArray.length === 0) {
          errorNotification("Please enter at least one valid category");
          return;
        }

        const csvHeader = "category\n";
        const csvBody = categoriesArray.join("\n");
        const csvText = csvHeader + csvBody;
        const csvFile = new Blob([csvText], { type: "text/csv" });
        const formData = new FormData();
        formData.append("file", csvFile, "categories.csv");
  
        response = await addCategory(formData);
      }

      if (response.status.toString().includes("20")) {
        successNotification(response.data?.message || (isEdit ? "Category updated successfully" : "Category created successfully"));
        onClose();
        mutate()
      } else {
        errorNotification(response?.data?.message || "Error creating category");
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
            {isEdit ? "Update Brand Category" : "Create Brand Category"}
          </div>
          <CustomModal
            show={show}
            onClose={onClose}
            fields={addCategoryFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            title={isEdit ? "Update Brand Category" : "Create Brand Category"}
            description=""
            submitButtonTitle={isEdit ? "Update" : "Create"}
          />
      </div>
    </div>
  )
}


export const addCategoryFields = [
  {
    type: "text",
    name: "category",
    placeholder: "Category name",
    colSpan: 2,
  },
];


export default CreateUpdateCategoryModal

