import { IoMdClose } from "react-icons/io";
import InputField from "../../forms/InputField";
import SubmitButton from "../../forms/SubmitButton";
import CustomFormik from "../../forms/CustomFormik";
import { errorNotification, successNotification } from "../../../utils/helpers";
import { statusDetailsValues } from "../../../utils/initialValues";
import { validateStatusDetails } from "../../../utils/validate";
import { manageUser } from "../../../api";

const AdditionalDetails = ({ show, onClose, id }) => {
  if (!show) {
    return null;
  }
  const initialValues = statusDetailsValues();
  const validationSchema = validateStatusDetails();

  const manageUserAction = async (values) => {
    const response = await manageUser(
      {
        actions: values?.actions,
        additionalDetails: values?.additionalDetails
      },
      id
    );
    if (response?.status?.toString()?.includes("20")) {
      successNotification(response?.data?.message);
      mutate()
    } else {
      errorNotification(response?.data?.message[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[70%] lg:w-1/2 gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold mb-3">Reason for Password Reset</div>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={manageUserAction}
        >
          <div className="space-y-4">
            <div className="flex justify-between gap-4 h-full">
              <div className="w-full h-full">
                <InputField name="additionalDetails" />
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
              <SubmitButton title="Reset Password" className="px-3 py-1 bg-red"/>
            </div>
          </div>
        </CustomFormik>
      </div>
    </div>
  );
};

export default AdditionalDetails;
