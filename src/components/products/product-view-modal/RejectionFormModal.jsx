import { IoMdClose }from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppFormButton from "../../forms/buttons/AppFormButton";


const RejectionFormModal = ({ show, onClose, }) => {
    if (!show) return null;
  
  const initialValues = {
    rejectionReason: "",
  };

  const validationSchema = Yup.object({
    rejectionReason: Yup.string().required("Please provide a reason for rejection"),
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
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[70%] lg:w-1/2">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="text-xl font-semibold">Rejection Reason</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        //   onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div className="flex justify-between gap-4 h-full">
              <div className="w-full h-full">
              <label htmlFor="rejectionReason">Rejection Reason</label>
                <Field
                  name="rejectionReason"
                  placeholder="Leave Reasons"
                  as="textarea"
                  rows="4"
                  className="w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2"
                />
                <ErrorMessage
                  name="rejectionReason"
                  component="div"
                  className="text-red-500 text-xs"
                />gi
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
                title="Reject"
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

export default RejectionFormModal