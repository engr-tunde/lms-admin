import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderViewBuyDetailsCard from "../../components/orders/order-view/OrderViewDetailsCard.jsx";
import OrderViewStatusCard from "../../components/orders/order-view/OrderViewStatusCard.jsx"
import OrderViewSummaryCard from "../../components/orders/order-view/OrderViewSummaryCard.jsx";
import OrderTrackingInfoCard from "../../components/orders/order-view/OrderViewTrackingInfoCard.jsx";
import OrderViewItemsTable from "../../components/orders/order-view/OrderViewItemsTable.jsx"

function OrderViewPage() {
  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Orders > Order details"
        title="Order 12345"
        copyable
        subtitle="See how your brand is performing today across sales orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <OrderViewStatusCard
         status="In progress"
         orderTime="July, 20 2025. 10:50 AM"
         deliveryDate="July 25, 2025"
         orderSum="15000"
         paymentStatus="Paid"
         />
        <OrderViewBuyDetailsCard
          customerName="Alex Turner"
          customerEmail="alex.turner@example.com"
          customerPhone="08092345623"
          customerAddress="24B, Kofo Abayomi Street, Victoria Island, Lagos"
          brandName="Stylish Co"
          brandEmail="stylish.co@example.com"
          brandPhone="08077899211"
          brandAddress="12B, Funke Ayoade Street, Victoria Island, Lagos"
          shippingMethod="Standard Delivery"
        />
        <OrderViewItemsTable />
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
        
      </div>
    </div>
  );
}

export default OrderViewPage;
