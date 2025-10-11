import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import { capitalize, compactDateFormatter, useToggleOpen } from "../../../utils/helpers";
import DeleteBrandTypeModal from "./DeleteBrandTypeModal";
import CreateUpdateBrandTypeModal from "./CreateUpdateBrandTypeModal";

function BrandTypeRowTemplate({ item, i, openIndex, setOpenIndex, mutate }) {
  const [showDeleteBrandModal, setShowDeleteBrandModal] = useState(false);
  const [showUpdateBrandModal, setShowUpdateBrandModal] = useState(false);

  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    i
  );

  const updateBrandType = async () => {
      const response = await updateBrandType(
        {
          name: "approved",
        },
        data?._id
      );
      console.log("response", response);
      if (response?.status?.toString()?.includes("20")) {
        successNotification(response?.data?.message);
        onClose();
        mutate();
      } else {
        errorNotification(response?.data?.message[0]);
      }
    };

  return (
    <>
      <tr key={i} className="border-1 border-t border-merseBorder">
        <td className="py-4 text-sm">{capitalize(item?.name)}</td>
        <td className="py-4 text-sm">{compactDateFormatter(item?.createdAt || item?.created_at)}</td>
        <td className="py-4 text-sm">
          <div className="relative cursor-pointer" ref={ref}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
            >
              <IoEllipsisVertical size={20} />
            </button>
            {isOpen && (
              <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col right-0 bg-white shadow-xl border-[1px]">
                <button 
                  className="text-sm text-left px-5 py-2" 
                  onClick={() => {
                    setShowUpdateBrandModal(true); 
                    close();
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() => {
                    setShowDeleteBrandModal(true);
                    close();
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </td>
      </tr>
      <CreateUpdateBrandTypeModal
        show={showUpdateBrandModal}
        onClose={() => setShowUpdateBrandModal(false)}
        mutate={mutate}
        isEdit={true}
        updateData={item}
      />
      <DeleteBrandTypeModal
        show={showDeleteBrandModal}
        onClose={() => setShowDeleteBrandModal(false)}
        brandToDelete={item?.name}
        brandToDeleteId={item?.id}
        mutate={mutate}
      />
    </>
  );
}
export default BrandTypeRowTemplate;
