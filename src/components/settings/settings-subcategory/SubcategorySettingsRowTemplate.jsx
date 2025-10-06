import { IoEllipsisVertical } from "react-icons/io5";
import DeleteSubcategoryModal from "./DeleteSubcategoryModal";
import { useEffect, useRef, useState } from "react";
import {
  capitalize,
  compactDateFormatter,
  useToggleOpen,
} from "../../../utils/helpers";

function SubcategorySettingsRowTemplate({
  item,
  i,
  openIndex,
  setOpenIndex,
  mutate,
}) {
  const [showDeleteSubcategoryModal, setShowDeleteSubcategoryModal] =
    useState(false);
  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    i
  );

  return (
    <>
      <tr key={i} className="border-1 border-t border-merseBorder">
        <td className="py-4 text-sm">{capitalize(item?.name)}</td>
        <td className="py-4 text-sm">{capitalize(item?.category?.name)}</td>
        <td className="py-4 text-sm">
          {compactDateFormatter(item.created_at || item.createdAt) || null}
        </td>
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
              <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 right-0 bg-white shadow-xl border-[1px]">
                <button className="text-sm text-left px-5 py-2" onClick={close}>
                  Edit
                </button>
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() => {
                    setShowDeleteSubcategoryModal(true);
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
      <DeleteSubcategoryModal
        show={showDeleteSubcategoryModal}
        onClose={() => setShowDeleteSubcategoryModal(false)}
        subcategoryToDelete={item.name}
        subcategoryToDeleteId={item.id}
        mutate={mutate}
      />
    </>
  );
}

export default SubcategorySettingsRowTemplate;
