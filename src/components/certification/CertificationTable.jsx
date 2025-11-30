import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import CertificationRowTemplate from "./CertificationRowTemplate";
import Pagination from "../globals/Pagination"

const CertificationTable = ({ certificationData, certificationColumnHeader }) => {
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch />
        </div>
      </div>
      <Table
        renderRow={(item) => (
          <CertificationRowTemplate
            key={item?.id}
            cert={item}
          />
        )}
        columns={certificationColumnHeader}
        data={certificationData}
      />
      <Pagination/>
    </div>
  );
}

export default CertificationTable;