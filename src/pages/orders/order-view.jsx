import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderViewBuyDetailsCard from "../../components/orders/order-view/OrderViewDetailsCard.jsx";
import OrderViewStatusCard from "../../components/orders/order-view/OrderViewStatusCard.jsx"
import OrderViewSummaryCard from "../../components/orders/order-view/OrderViewSummaryCard.jsx";
import OrderViewItemsTable from "../../components/orders/order-view/OrderViewItemsTable.jsx"
import OrderViewTimelineCard from "../../components/orders/order-view/OrderViewTimelineCard.jsx"
import { fetchAllOrders, fetchOrder } from "../../api/index.js"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import OrderViewTracking from "../../components/orders/order-view/OrderViewTrackingCard.jsx";

function OrderViewPage() {
  const { id } = useParams();

  const { order, orderLoading, orderError, mutate } = fetchOrder(id)

  if (orderLoading) return <Loader />;
  if (orderError) return <ErrorWidget error={orderError} />;
  if (!order) return <div>No order data found.</div>;

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Orders > Order details"
        title={`Order ${id?.slice(-5)}`} 
        copyable
        subtitle="See how your brand is performing today across sales orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        {order ? (
          <>
            <OrderViewTimelineCard 
             order={order}
             mutate={mutate}
            />
            <OrderViewStatusCard 
            order={order}
            mutate={mutate}
            />
            <OrderViewBuyDetailsCard
              order={order}
              brandName="Stylish Co"
              brandEmail="stylish.co@example.com"
              brandPhone="08077899211"
              brandAddress="12B, Funke Ayoade Street, Victoria Island, Lagos"
              shippingMethod="Standard Delivery"
            />
            <OrderViewItemsTable order={order} />
            <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
              <OrderViewSummaryCard 
               order={order}
              />
              <OrderViewTracking order={order} />
            </div>
          </>
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