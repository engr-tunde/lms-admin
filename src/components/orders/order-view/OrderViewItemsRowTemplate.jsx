import { formatter } from "../../../utils/helpers";


function OrderViewItemsRowTemplate(item) {

  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm text-center block lg:table-cell">
        <div className="w-full flex gap-4 items-center">
          <div className="">
            <img src={item.image} alt={``} className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold self-start">{item.product}</div>
            <div className="flex justify-between">
              <span className="flex items-center text-sm">
                Color: 
                <span
                  className="w-3 h-3 rounded-full border inline-block mx-1"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.color}
                </span>
              <span className="text-sm">Size: {item.size.toUpperCase()}</span>
            </div>
            <div className="self-start mt-5">Qty: {item.quantity}</div>
          </div>
        </div>
      </td>
      <td className="py-6 text-sm hidden lg:table-cell">{item.status}</td>
      <td className="py-6 text-sm hidden lg:table-cell">{formatter(item.unitPrice)}</td>
    </tr>
  );
}

export default OrderViewItemsRowTemplate;
