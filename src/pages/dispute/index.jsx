import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderDisputeTable from "../../components/dispute/OrderDisputeTable";
import PayoutDisputeTable from "../../components/dispute/PayoutDisputeTable"
import { useState } from "react";
// import { addDisputes, fetchAllDisputes } from "../../api";
// import { errorNotification, successNotification } from "../../utils/helpers";


function DashboardDisputePage() {
  const [activeTab, setActiveTab] = useState("Order Dispute")
  const tabs = ["Order Dispute", "Payout Dispute"]

  // const createDisputes = async () => {

  //   const disputeValues = {
  //   payout: "68f11428eb16a6acb331823b",
  //   customer: "68faaf0fdfad400128fb92f9", // Kyra Browning
  //   disputeType: "out_of_stock",
  //   preferredAction: "extend_fulfillment_time",
  //   urgency: "high",
  //   disputeRequestType: "payout",
  //   status: "open",
  //   additionalDetails: "Payout has been delayed for over a week despite confirmation.",
  //   brand: {
  //     id: "68e3ad266c586f9d627ddc2f",
  //     name: "highfashion"
  //   }
  // }

  //   const response = await addDisputes(disputeValues);
  //   if (response?.status?.toString()?.includes("20")) {
  //     successNotification(response?.data?.message || "Dispute created successfully");
  //     // close();
  //     // mutate();
  //   } else {
  //     errorNotification(response?.data?.message[0]);
  //   }
  // }
  
  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Dispute"
        subtitle="Manage and resolve customer or merchant issues."
      />
      {/* <button
        className="self-end px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={createDisputes}
      >
        Create Dispute
      </button> */}
      <div className="w-full flex flex-col gap-8">
        {activeTab === "Order Dispute" ? (
            <OrderDisputeTable activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : (
            <PayoutDisputeTable activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
}

export default DashboardDisputePage;




// const disputes = [
//   // ===== ORDER DISPUTES (6) =====
//   {
//     order: "68fa9566dfad400128fb8ee5",
//     customer: "68fab7a0dfad400128fb9500", // Naomi Norris
//     disputeType: "unable_to_fulfill_order",
//     preferredAction: "cancel_order",
//     urgency: "medium",
//     disputeRequestType: "order",
//     status: "in_review",
//     additionalDetails: "Seller reported stock issues after confirming order.",
//     brand: {
//       id: "68fab9cedfad400128fb9565",
//       name: "ut molestias illum"
//     }
//   },
//   {
//     order: "68fa8d8fdfad400128fb8b24",
//     customer: "68fab918dfad400128fb9535", // Shelly Vaughan
//     disputeType: "out_of_stock",
//     preferredAction: "cancel_order",
//     urgency: "high",
//     disputeRequestType: "order",
//     status: "open",
//     additionalDetails: "Customer received a completely different item than ordered.",
//     brand: {
//       id: "68f768f8cb74155b643e81a3",
//       name: "fancy"
//     }
//   },
//   {
//     order: "68fa8d46dfad400128fb8a25",
//     customer: "68fabbfedfad400128fb95ea", // Fleur Holcomb
//     disputeType: "shipping_delay",
//     preferredAction: "cancel_order",
//     urgency: "medium",
//     disputeRequestType: "order",
//     status: "resolved",
//     additionalDetails: "Product was replaced after image verification.",
//     brand: {
//       id: "68fab6a7dfad400128fb94a4",
//       name: "in nesciunt quasi q"
//     }
//   },
//   {
//     order: "68fa8c0ddfad400128fb88ce",
//     customer: "68fabae7dfad400128fb95ca", // Lenore Bernard
//     disputeType: "out_of_stock",
//     preferredAction: "cancel_order",
//     urgency: "low",
//     disputeRequestType: "order",
//     status: "resolved",
//     additionalDetails: "Order arrived 5 days late; half refund approved.",
//     brand: {
//       id: "68fab3badfad400128fb93e1",
//       name: "aliquip illo velit d"
//     }
//   },
//   {
//     order: "68fa87fcdfad400128fb8888",
//     customer: "68fabd51dfad400128fb9603", // Ann Nolan
//     disputeType: "wrong_item_listed",
//     preferredAction: "extend_fulfillment_time",
//     urgency: "medium",
//     disputeRequestType: "order",
//     status: "in_review",
//     additionalDetails: "Wrong size received. Awaiting seller confirmation.",
//     brand: {
//       id: "68faae25dfad400128fb927a",
//       name: "minim vitae soluta e"
//     }
//   },


//   {
//     order: "68fa75f3dfad400128fb87da",
//     customer: "68fabe9adfad400128fb9630", // Leigh David
//     disputeType: "wrong_item_listed",
//     preferredAction: "cancel_order",
//     urgency: "high",
//     disputeRequestType: "order",
//     status: "open",
//     additionalDetails: "Seller stopped responding to messages after payment.",
//     brand: {
//       id: "68fab6a7dfad400128fb94a4",
//       name: "in nesciunt quasi q"
//     }
//   },

//   // ===== PAYOUT DISPUTES (4) =====
//   {
//     payout: "68f11428eb16a6acb331823b",
//     customer: "68fab5e6dfad400128fb9474", // Lane Dunn
//     disputeType: "unable_to_fulfill_order",
//     preferredAction: "extend_fulfillment_time",
//     urgency: "medium",
//     disputeRequestType: "payout",
//     status: "in_review",
//     additionalDetails: "Payment captured but not reflected in payout dashboard.",
//     brand: {
//       id: "68fab6a7dfad400128fb94a4",
//       name: "in nesciunt quasi q"
//     }
//   },
//   {
//     payout: "68f11428eb16a6acb331823b",
//     customer: "68faaf0fdfad400128fb92f9", // Kyra Browning
//     disputeType: "out_of_stock",
//     preferredAction: "extend_fulfillment_time",
//     urgency: "high",
//     disputeRequestType: "payout",
//     status: "open",
//     additionalDetails: "Payout has been delayed for over a week despite confirmation.",
//     brand: {
//       id: "68e3ad266c586f9d627ddc2f",
//       name: "highfashion"
//     }
//   },
//   {
//     payout: "68f11428eb16a6acb331823b",
//     customer: "68faad44dfad400128fb9240", // Ashton Blankenship
//     disputeType: "wrong_item_listed",
//     preferredAction: "extend_fulfillment_time",
//     urgency: "medium",
//     disputeRequestType: "payout",
//     status: "resolved",
//     additionalDetails: "Seller received 20% less than expected due to system miscalculation.",
//     brand: {
//       id: "68fab6a7dfad400128fb94a4",
//       name: "in nesciunt quasi q"
//     }
//   },
//   {
//     payout: "68f11428eb16a6acb331823b",
//     customer: "68ff834d3d5e1340d7e3fc99", // Kayode
//     disputeType: "unable_to_fulfill_order",
//     preferredAction: "extend_fulfillment_time",
//     urgency: "high",
//     disputeRequestType: "payout",
//     status: "rejected",
//     additionalDetails: "Dispute rejected after seller provided fulfillment proof.",
//     brand: {
//       id: "68fab6a7dfad400128fb94a4",
//       name: "in nesciunt quasi q"
//     }
//   },
// ];
