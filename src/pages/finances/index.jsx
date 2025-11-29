import { useState } from "react";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { PlusIcon } from "../../components/globals/Icons";
import FinanceStatCardContainer from "../../components/finances/FinanceStatCardContainer";
import ManageFinances from "../../components/finances";


const DashboardFinancesPage = () => {

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Manage Payment"
          subtitle="Manage your payment details to receive course earnings"
        />
        <div>
          <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Request Payout
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <FinanceStatCardContainer />
          <ManageFinances />
        </div>
      </div>
    </div>
  )
}

export default DashboardFinancesPage;





