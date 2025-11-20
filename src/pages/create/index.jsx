import ProgressBar from "../../components/globals/ProgressBar";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import CourseCreatePage from "../../components/create";

const DashboardCreatePage = () => {
  const [activeTab, setActiveTab] = useState("courseOverview")

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Create"
        subtitle="Choose the type of content you want to create"
      />
      <div className="flex gap-3">
        <button 
          onClick={() => setActiveTab("courseOverview")}
          className={`pr-3 py-1 ${
              activeTab === "courseOverview" ? "text-black border-b-2 border-black" : "text-merseBorder"
          }`}
          >
              Course Overview
        </button>
        {/* <button 
          onClick={() => setActiveTab("courseCurriculum")}
          className={`pr-3 py-1 ${
              activeTab === "courseCurriculum" ? "text-black border-b-2 border-black" : "text-merseBorder"
          }`}
          >
              Course Curriculum
        </button> */}
        <button 
          onClick={() => setActiveTab("courseMaterials")}
          className={`pr-3 py-1 ${
              activeTab === "courseMaterials" ? "text-black border-b-2 border-black" : "text-merseBorder"
          }`}
          >
              Course Materials
        </button>
        <button 
          onClick={() => setActiveTab("price")}
          className={`pr-3 py-1 ${
              activeTab === "price" ? "text-black border-b-2 border-black" : "text-merseBorder"
          }`}
          >
              Price
        </button>
        <button 
          onClick={() => setActiveTab("publish")}
          className={`pr-3 py-1 ${
              activeTab === "publish" ? "text-black border-b-2 border-black" : "text-merseBorder"
          }`}
          >
              Publish
        </button>
      </div>
      <div className="w-full flex flex-col gap-8">
        <ProgressBar value={45}/>
        <CourseCreatePage activeTab={activeTab} />
      </div>
    </div>
  )
}

export default DashboardCreatePage;






