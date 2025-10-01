import { IoMdClose } from "react-icons/io";
import InputField from "../../forms/InputField";
import SubmitButton from "../../forms/SubmitButton";
import CustomFormik from "../../forms/CustomFormik";
import { rejectProductValues } from "../../../utils/initialValues";
import { validaterejectProduct } from "../../../utils/validate";
import { errorNotification, successNotification } from "../../../utils/helpers";
import { approveRejectProduct } from "../../../api";

const RejectionFormModal = ({ show, onClose, data }) => {
  if (!show) {
    return null;
  }
  const initialValues = rejectProductValues();
  const validationSchema = validaterejectProduct();
  console.log("data rejectionmodal", data);

  const handleSubmit = async (values) => {
    const response = await approveRejectProduct(
      {
        rejectReason: values?.rejectReason,
        approvalStatus: "rejected",
      },
      data?._id
    );
    if (response?.status?.toString()?.includes("20")) {
      successNotification(response?.data?.message);
      onClose();
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
        <div className="font-semibold mb-3">Rejection Reason</div>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div className="flex justify-between gap-4 h-full">
              <div className="w-full h-full">
                {/* <label htmlFor="rejectionReason">Rejection Reason</label> */}
                <InputField name="rejectReason" />
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

              <SubmitButton title="Reject" className="px-3 py-1" />
            </div>
          </div>
        </CustomFormik>
      </div>
    </div>
  );
};

export default RejectionFormModal;
