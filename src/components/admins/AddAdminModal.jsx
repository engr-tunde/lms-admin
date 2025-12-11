import InputField from "../forms/InputField";
import CustomModal from "../globals/Modals";
import { addAdminValues } from "../../utils/initialValues"
import { validateAddAdmin } from "../../utils/validate"
import { addAdmin, updateAdmin } from "../../api";
import SubmitButton from "../forms/SubmitButton";
import { successNotification, errorNotification } from "../../utils/helpers";

const AddAdminModal = ({ setShowAddModal, adminData, mutate }) => {
    
  const initialValues = adminData ? 
    {
      name: adminData?.name || "",
      email: adminData?.email || "",
      username: adminData?.username || "",
      password: "",
    } :  addAdminValues();
  
  const validationSchema = validateAddAdmin();

  const handleSubmit = async (values) => {
    let response 
    if (adminData) {
      response = await updateAdmin(values, adminData?._id)
    } else {
      response = await addAdmin(values)
    }
    if (response.status.toString().includes("20")) {
      successNotification(response?.data?.message);
      mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <span className="text-xl font-semibold text-gray-900">
            Add New Admin
          </span>
        </div>
            
        <CustomModal
          title=""
          description=""
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit = {handleSubmit}
          className="p-6"
        >
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <InputField
                  name="name"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <InputField
                  name="email"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Username
                </label>
                <InputField
                  name="username"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Password
                </label>
                <InputField
                  name="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <SubmitButton 
                title={adminData ? "Update Admin" : "Add Admin"}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              />
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  )
}

export default AddAdminModal