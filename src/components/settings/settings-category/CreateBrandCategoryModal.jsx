import { IoMdClose }from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppFormButton from "../../forms/buttons/AppFormButton";


const CreateBrandCategoryModal = ({ show, onClose, }) => {
    if (!show) return null;
  
  const initialValues = {
    category: "",
  };

  const validationSchema = Yup.object({
    category: Yup.string().required("Please, provide brand category"),
  });

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
          <div className="font-semibold text-sm mb-3">Create Brand Category</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        //   onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div className="flex justify-between gap-4 h-full">
              <div className="w-full h-full">
                <Field
                  name="category"
                  placeholder="Category name"
                  className="w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2"
                />
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-xs"
                />
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
                title="Create"
                className="px-3 py-1 text-white bg-black text-sm"
                // type="submit"
                isSubmitting={false}
                disabled={true}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default CreateBrandCategoryModal

// AppFormButton = ({ title, className, isSubmitting, disabled })