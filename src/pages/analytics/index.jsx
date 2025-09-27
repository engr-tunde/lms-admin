import DashboardNavBar from "../../components/globals/DashboardNavBar";
import AnalyticsOverviewPage from "../../components/analytics/AnalyticsOverviewChart"
import AnalyticsSummaryChart from "../../components/analytics/AnalyticsSummaryChart"
import AnalyticsTopBrandsTable from "../../components/analytics/AnalyticsTopBrandsTable"

function DashboardAnalyticsPage() {

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Analytics"
          subtitle="See how your brand is performing today across sales, orders & top products."
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <AnalyticsOverviewPage />
        </div>
        <div className="col-span-2 lg:col-span-1"
        >
          <AnalyticsSummaryChart />
        </div>
        <div className="col-span-2 lg:col-span-1"
        >
          <AnalyticsTopBrandsTable/>
        </div>
      </div>
    </div>
  );
}

export default DashboardAnalyticsPage;
