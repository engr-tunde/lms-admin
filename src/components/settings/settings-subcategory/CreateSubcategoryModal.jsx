import { IoMdClose }from "react-icons/io";
import { validateAddSubcategoryValues } from "../../../utils/validate"
import { addSubcategoryValues } from "../../../utils/initialValues"
import CustomModal from "../../globals/Modals"
import { addSubcategory } from "../../../api"
import { errorNotification, successNotification } from "../../../utils/helpers";


const CreateSubcategoryModal = ({ show, onClose, categoryData, mutate }) => {
  if (!show) return null;

  const initialValues = addSubcategoryValues();
  const validationSchema = validateAddSubcategoryValues();

  const categoryOptions = categoryData?.map(cat => (
    { value: cat.name.split(" ").join("").toLowerCase(), title: cat.name, id: cat._id })) || [];
  const addSubcategoryFields = [
    {
      type: "select",
      name: "category",
      title: "Pick category from the options below",      
      options: categoryOptions,
      colSpan: 2,
    },
    {
      type: "text",
      name: "subcategory",
      placeholder: "Subcategory name",
      colSpan: 2,
    },
  ];

  const handleSubmit = async (values) => {
    const selectedCategory = categoryOptions.find(cat => cat.value === values.category)
    const payload = {
      name: values?.subcategory,    
      categoryId: selectedCategory?.id,                  
    };

    const response = await addSubcategory(payload);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message || "Subcategory created");
      onClose();
      mutate();
    } else {
      errorNotification(response?.data?.message || "Error creating subcategory");
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/3 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
          <div className="font-semibold text-sm mb-3">
            Create Brand Subcategory
          </div>
          <CustomModal
            show={show}
            onClose={onClose}
            fields={addSubcategoryFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            title="Create Brand Subcategory"
            description=""
            submitButtonTitle="Create"
          />
      </div>
    </div>
  )
}


export default CreateSubcategoryModal
