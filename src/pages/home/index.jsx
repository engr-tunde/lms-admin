import CreatePage from "../../components/create";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import HomeCreateOptions from "../../components/home/index"

const DashboardHomePage = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Create"
        subtitle="Choose the type of content you want to create"
      />
      <HomeCreateOptions />
    </div>
  )
}

export default DashboardHomePage;