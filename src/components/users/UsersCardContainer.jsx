import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { TbUserCheck } from "react-icons/tb";
import { AiOutlineUserDelete } from "react-icons/ai";
import UsersCard from "./UsersCard";





function UsersCardContainer({ summary }) {
  const userGroupIcon = () => (
    <HiOutlineUserGroup size={50} className="text-merseBorder" />
  );
  const userAddIcon = () => (
    <AiOutlineUserAdd size={50} className="text-merseBorder" />
  );
  const userDeleteIcon = () => (
    <AiOutlineUserDelete size={50} className="text-merseBorder" />
  );
  const checkUserIcon = () => (
      <TbUserCheck size={50} className="text-merseBorder" />
  );

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
      <UsersCard
        title="Total Registered Users"
        figure={summary?.totalRegistered}
        percent={0}
        icon={userGroupIcon}
        size="sm"
        lastUpdated={""}
      />
      <UsersCard
        title="Active Users"
        figure={summary?.activeUsers}
        percent={0}
        icon={checkUserIcon}
        lastUpdated={""}
      />
      <UsersCard
        title="New Signups"
        figure={200}
        percent={0}
        icon={userAddIcon}
        lastUpdated={""}
      />
      <UsersCard
        title="Suspended Users"
        figure={summary?.suspendedUsers}
        percent={0}
        icon={userDeleteIcon}
        lastUpdated={""}
      />
    </div>
  );
}

export default UsersCardContainer;
