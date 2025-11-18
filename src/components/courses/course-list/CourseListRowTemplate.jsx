import StatusCheck from "../../globals/StatusCheck"
import { capitalize } from "../../../utils/helpers"
import ProgressBar from "../../globals/ProgressBar";
import { Link } from "react-router-dom"

function CourseListRowTemplate({ item }) {
  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-6">
        <div className="flex flex-col gap-10">
          <span className="font-semibold">{item?.courseTitle}</span>
          <div>
            <StatusCheck 
              value={capitalize(item?.status)}
              className={`px-3 py-1`}
            />
          </div>
        </div>
      </td>
      <td className="py-6 text-sm px-4">
        <Link
          to={"/"}
          className="hover:opacity-50 px-4 py-1 w-full"
        >
          <ProgressBar
            label="Finish up your course setup"
            value={45}
          />
        </Link>
      </td>
      <td className="py-6 text-sm">
        <div className="flex flex-col gap-10">
          <span>{item.instructor}</span>
          <span>{item.lastUpdated}</span>
        </div>
      </td>
    </tr>
  );
}

export default CourseListRowTemplate;
