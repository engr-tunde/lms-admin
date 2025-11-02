import { capitalize, formatter } from "../../../utils/helpers";


function OrderViewItemsRowTemplate({  item, i, orderStatus }) {

  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm text-center block lg:table-cell">
        <div className="w-full flex gap-4 items-center">
          <div className="w-20">
            <img src={item?.image} alt={``} className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold self-start">{capitalize(item?.productName)}</div>
            <div className="flex justify-between w-full gap-20">
              <div className="flex items-center text-sm">
                Color: 
                <span
                  className="w-3 h-3 rounded-full border inline-block mx-1"
                  style={{ backgroundColor: item?.color }}
                />
                {item?.color}
              </div>
              <div className="text-sm">Size: {item?.size.toUpperCase()}</div>
            </div>
            <div className="self-start mt-5">Qty: {item?.quantity}</div>
          </div>
        </div>
      </td>
      <td className="py-6 text-sm hidden lg:table-cell">{capitalize(item?.status || orderStatus)}</td>
      <td className="py-6 text-sm hidden lg:table-cell">{formatter(item?.price)}</td>
    </tr>
  );
}

export default OrderViewItemsRowTemplate;
