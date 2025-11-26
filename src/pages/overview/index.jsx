import CreatePage from "../../components/create";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OverviewOptions from "../../components/overview"

const DashboardOverviewPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Create"
        subtitle="Choose the type of content you want to create"
      />
      <OverviewOptions />
    </div>
  )
}

export default DashboardOverviewPage;