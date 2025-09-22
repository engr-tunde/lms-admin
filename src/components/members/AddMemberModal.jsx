import { IoMdClose }from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";


const AddMemberModal = ({ show, onClose, }) => {
    if (!show) return null;
  
  const initialValues = {
    emailAddress: "",
    roles: "",
  };

  const validationSchema = Yup.object({
    emailAddress: Yup.string().required("Email Address is required"),
    roles: Yup.string().required("Roles are required"),
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
      <div className="bg-white p-6 shadow-lg  w-1/2">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <span className="text-xl font-semibold">Add team members</span>
          <span className="text-sm text-merseBorder">Each user will receive an email invitation to get them started</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        //   onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div className="flex justify-between gap-4 h-full">
              <div className="w-1/2 h-full">
                <Field
                  name="emailAddress"
                  placeholder="Email address"
                  className="w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2"
                />
                <ErrorMessage
                  name="emailAddress"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-1/2 h-full">
                <Field
                  name="roles"
                  as="select"
                  className="w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2"
                >
                  <option value="roles">Select a role</option>
                  <option value="admin">Admin</option>
                  <option value="operationsManager">Operations Manager</option>
                  <option value="financeManager">Finance Manager</option>
                  <option value="brandManager">Brand Manager</option>
                </Field>
                <ErrorMessage
                  name="roles"
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
              <button
                type="submit"
                className="px-3 py-1 text-white bg-black text-sm"
              >
                Invite Member
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default AddMemberModal