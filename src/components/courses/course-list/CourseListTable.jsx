import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { coursesColumnHeader, coursesData } from "../../../data/contentsData";
import CourseListRowTemplate from "./CourseListRowTemplate";
import StatusFilter from "../../globals/StatusFilter";
import { useState } from "react";

const CourseListTable = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCourses = coursesData.filter(course => {
    if (filterStatus !== 'all' && course.status !== filterStatus) return false;
    return true;
  });

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
          <TableSearch />
        </div>
        
        <div className="flex items-center gap-3">
          <StatusFilter
            filter={filterStatus} 
            setFilter={setFilterStatus} 
            filterArr={courseStatus} 
          />
        </div>
      </div>
      <Table
        renderRow={(item) => (
          <CourseListRowTemplate
            key={item?.id}
            item={item}
          />
        )}
        columns={coursesColumnHeader}
        data={filteredCourses}
      />
    </div>
  )
}

export default CourseListTable;