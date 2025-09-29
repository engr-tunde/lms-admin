import { useState } from "react";
import { deleteProduct } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import ProductForm from "../form-modals/ProductForm";

const FormModal = ({ table, type, id, data, modalElement }) => {
  const [open, setopen] = useState(false);

  const forms = {
    product: (type, data) => (
      <ProductForm type={type} data={data} setopen={setopen} />
    ),
  };

  const handleDelete = async () => {
    const res = table === "product" ? await deleteProduct(id) : null;
    console.log("res", res);
    if (res.status === 200) {
      successMessage(res?.data?.message);
      setopen(false);
      window.location.reload();
    } else {
      errorMessage(res?.data?.error);
    }
  };

  const Form = () => {
    return type == "delete" && id ? (
      <div className="p-10 flex flex-col items-center gap-4">
        <div className="text-center font-medium">
          All data will be deleted upon the compltion of this action. Are you
          sure you want to continue
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-6 font-semibold rounded-md w-max cursor-pointer hover:scale-110 ease-in duration-200"
        >
          Delete
        </button>
      </div>
    ) : type == "create" || type == "update" ? (
      forms[table](type, data)
    ) : null;
  };

  return (
    <>
      <button
        onClick={() => setopen(true)}
        className={`flex items-center rounded-sm text-[15px] cursor-pointer ${
          type == "create" ? "gap-2 bg-[#17a2b8] text-white py-2 px-3" : "gap-1"
        }`}
      >
        {() => modalElement()}
      </button>

      {open && (
        // <div className="w-screen h-screen bg-black/65 fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
          <div className="bg-white w-[75%] p-5 relative ">
            <div
              className="absolute top-4 right-4 cursor-pointer text-xl font-semibold"
              onClick={() => setopen(false)}
            >
              x
            </div>
            <div className="max-h-[80vh] overflow-y-scroll">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
