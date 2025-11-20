import { addAdminValues } from "../../utils/initialValues";
import { validateAddAdmin } from "../../utils/validate";
import { adminRoles } from "../../data/memberData";
import { addAdmin } from "../../api";
import { errorNotification, successNotification } from "../../utils/helpers";
import CustomModal from "../globals/Modals";

const AddMemberModal = ({ show, onClose, mutate }) => {
  if (!show) return null;

  const initialValues = addAdminValues();
  const validationSchema = validateAddAdmin();

  const handleSubmit = async (values) => {
    const response = await addAdmin(values);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      onClose();
      mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <CustomModal
      show={show}
      onClose={onClose}
      fields={addAdminFields}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      title="Add team members"
      description="Each user will receive an email invitation to get them started"
    />
  );
};

export default AddMemberModal;



// data/formConfigs.js
export const addAdminFields = [
  {
    type: "text",               
    name: "fullName",     
    placeholder: "Full name",
    colSpan: 2,
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email address",
    colSpan: 1,
  },
  {
    type: "select",             
    name: "role",
    title: "Select admin",      
    options: adminRoles,
    colSpan: 1,
  },
];
