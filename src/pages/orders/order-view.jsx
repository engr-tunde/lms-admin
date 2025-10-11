import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderViewBuyDetailsCard from "../../components/orders/order-view/OrderViewDetailsCard.jsx";
import OrderViewStatusCard from "../../components/orders/order-view/OrderViewStatusCard.jsx"
import OrderViewSummaryCard from "../../components/orders/order-view/OrderViewSummaryCard.jsx";
import OrderTrackingInfoCard from "../../components/orders/order-view/OrderViewTrackingInfoCard.jsx";
import OrderViewItemsTable from "../../components/orders/order-view/OrderViewItemsTable.jsx"
import OrderViewTimelineCard from "../../components/orders/order-view/OrderViewTimelineCard.jsx"
import { fetchOrders } from "../../api/index.js"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import { capitalize, dateFormatter, dateTimeFormatter, formatter } from "../../utils/helpers.js";

function OrderViewPage() {
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
  const [order, setOrder] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const foundOrder = orders?.orders?.find((item) => item._id === id)
    setOrder(foundOrder)
  }, [orders, id])

  console.log("picked order", order);

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Orders > Order details"
        title="Order 12345"
        copyable
        subtitle="See how your brand is performing today across sales orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        {orders ? (
          <>
            <OrderViewTimelineCard />
            <OrderViewStatusCard order={order}/>
            <OrderViewBuyDetailsCard
              brandName="Stylish Co"
              brandEmail="stylish.co@example.com"
              brandPhone="08077899211"
              brandAddress="12B, Funke Ayoade Street, Victoria Island, Lagos"
              shippingMethod="Standard Delivery"
              order={order}
            />
            <OrderViewItemsTable order={order} />
            <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
              <OrderViewSummaryCard 
               orderSummary="9,0000.00" 
               totalOrderValue="90,0000.00" 
               discountSum="10,000.00" 
               shippingPaidByBuyer="0.00" 
               platformCommission="9,0000.00" 
               totalPayout="90,0000.00"
              />
              <OrderTrackingInfoCard />
            </div>
          </>
        ) : ordersLoading ? (
          <Loader />
        ) : ordersError ? (
          <ErrorWidget error={ordersError} />
        ) : null}
      </div>
    </div>
  );
}

export default OrderViewPage;



// {orders.orders ? (
//         <>
          
//         </>
//       ) : ordersLoading ? (
//         <Loader />
//       ) : ordersError ? (
//         <ErrorWidget error={ordersError} />
//       ) : null}