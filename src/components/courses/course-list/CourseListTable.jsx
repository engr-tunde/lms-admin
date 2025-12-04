import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import CourseListRowTemplate from "./CourseListRowTemplate";
import { coursesColumnHeader } from "../../../data/contentsData";


const CourseListTable = ({ filteredData, setFilteredData, originalArr, setOriginalArr, }) => {

  const courseStatus = [
    { title: "All", value: "all" },
    { title: "Draft", value: "draft" },
    { title: "Published", value: "published" },
    { title: "Archived", value: "archived" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch 
            originalArr={originalArr}
            setFilteredData={setFilteredData}
            searchable={["title"]}
          />
        </div>
        
        {/* <div className="flex items-center gap-3">
          <StatusFilter
            filter={filterStatus} 
            setFilter={setFilterStatus} 
            filterArr={courseStatus} 
          />
        </div> */}
      </div>
      <Table
        renderRow={(item) => (
          <CourseListRowTemplate
            key={item?.id}
            item={item}
          />
        )}
        columns={coursesColumnHeader}
        data={filteredData}
      />
    </div>
  )
}

export default CourseListTable;