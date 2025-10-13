import { useState } from "react";
import { capitalize } from "../../utils/helpers";


const ExtraOrderItemsBadge = ({ items = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const extraCount = items.length > 1 ? items.length - 1 : 0;

  if (extraCount <= 0) return null;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-black text-white text-[11px] px-2 py-[2px] rounded-sm"
      >
        +{extraCount} more
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 w-full"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-4 w-[90%] max-w-sm shadow-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-semibold mb-2">Other items</h3>
            <ul className="text-sm text-gray-700 space-y-1 max-h-[200px] overflow-auto">
              {items?.map((item, i) => (
                <li key={i}>
                  • {capitalize(item.productName)}
                  <span className="w-3 h-3 rounded-full border inline-block mx-4" style={{ backgroundColor: item.color }}/>
                  <span>{item.size.toUpperCase()}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-3 text-sm text-black border-merseBorder border-[2px] px-3 py-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExtraOrderItemsBadge;