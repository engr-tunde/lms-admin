import { IoMdClose }from "react-icons/io";


const RepViewModal = ({ show, onClose, verification }) => {
  if (!show) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/3 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold text-sm">
          Representative ID
        </div>
        <div className="flex justify-between gap-4 h-full">
          <div className="w-full h-full text-sm">
            {verification?.representative_id_type || "N/A"}
          </div>
          <img src="" alt="" />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 border-2 text-sm"
          >
            Cancel
          </button>
          </div>
      </div>
    </div>
  )
}

export default RepViewModal