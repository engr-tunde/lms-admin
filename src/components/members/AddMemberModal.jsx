import { IoMdClose } from "react-icons/io";
import { addAdminValues } from "../../utils/initialValues";
import { validateAddAdmin } from "../../utils/validate";
import CustomFormik from "../../utils/CustomFormik";
import SubmitButton from "../forms/SubmitButton";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import { adminRoles } from "../../data/memberData";
import { addAdmin } from "../../api";
import { errorNotification, successNotification } from "../../utils/helpers";

const AddMemberModal = ({ show, onClose }) => {
  if (!show) return null;

  const initialValues = addAdminValues();
  const validationSchema = validateAddAdmin();

  const handleSubmit = async (values) => {
    const response = await addAdmin(values);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      onClose();
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[70%] lg:w-1/2">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <span className="text-xl font-semibold">Add team members</span>
          <span className="text-sm text-merseBorder">
            Each user will receive an email invitation to get them started
          </span>
        </div>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 ustify-between gap-4 h-full">
            <div className="col-span-1 lg:col-span-2 h-full">
              <InputField name="fullName" placeholder="Full name" />
            </div>
            <div className="col-span-1 h-full">
              <InputField name="email" placeholder="Email address" />
            </div>
            <div className="col-span-1 h-full">
              <SelectField
                name="role"
                array={adminRoles}
                title="Select admin"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border-2 text-sm"
            >
              Cancel
            </button>
            <SubmitButton title="Invite Member" className="px-3 py-1" />
          </div>
        </CustomFormik>
      </div>
    </div>
  );
};

export default AddMemberModal;
