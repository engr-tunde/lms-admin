import CreatePage from "../../components/create";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import DashboardStats from "../../components/globals/DashboardStats";
import { CheckIcon, ClockIcon, DollarIcon, TrendingUpIcon } from "../../components/globals/Icons";
import OverviewOptions from "../../components/overview"
import { fetchAllOrders, fetchAllPayments, fetchAllCourses, fetchAllUsers } from "../../api";
import { useEffect, useState } from "react";

const DashboardOverviewPage = () => {
  const [totalOrders, setTotalOrders] = useState();
  const [recentOrders, setRecentOrders] = useState();
  const [totalEarnings, setTotalEarnings] = useState();
  const [totalUsers, setTotalUsers] = useState();
  const [recentUsers, setRecentUsers] = useState();
  const [totalCourses, setTotalCourses] = useState();
  const [recentCourses, setRecentCourses] = useState();
  const [recentPayments, setRecentPayments] = useState();
  const { orders } = fetchAllOrders()
  const { users } = fetchAllUsers()
  const { courses } = fetchAllCourses()
  const { payments } = fetchAllPayments()
  
  useEffect(() => {
    if (orders?.data?.orders) {
      setTotalOrders(orders?.data?.orders?.count.length);
      setTotalEarnings(orders?.data?.orders?.total);

      const recent = orders?.data?.orders?.count
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
      setRecentOrders(recent);
    }
  }, [orders]);

  useEffect(() => {
    if (users?.data) {
      setTotalUsers(users?.data?.length);

      const recent = users?.data
        .sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate))
        .slice(0, 3);
      setRecentUsers(recent);
    }
  }, [users]);

  useEffect(() => {
    if (courses?.data?.summary) {
      setTotalCourses(courses?.data?.summary?.totalCoursesCount);
      const recent = courses?.data?.courses
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);
      setRecentCourses(recent);
    }
  }, [courses]);

  useEffect(() => {
    if (payments) {
      const recent = payments?.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
      setRecentPayments(recent);
    }
  }, [payments]);

  console.log({recentPayments});

  const overviewStats = [
    { label: "Total Orders", value: totalOrders ? totalOrders : 0, icon: ClockIcon, color: "emerald" },
    { label: "Total Earnings", value: `$${totalEarnings ? totalEarnings : 0}`, icon: DollarIcon, color: "amber" },
    { label: "Total Users", value: totalUsers ? totalUsers : 0, icon: TrendingUpIcon, color: "blue" },
    { label: "Total Courses", value: totalCourses ? totalCourses : 0, icon: CheckIcon, color: "purple" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Build Your Course"
        subtitle="Start creating lessons, assessments, and materials"
      />
      <div className="bg-gray-50">
        <div className="mx-auto p-6">
          <DashboardStats 
            stats={overviewStats}
          />
          <OverviewOptions 
            recentOrders={recentOrders}
            recentUsers={recentUsers}
            recentCourses={recentCourses}
            recentPayments={recentPayments}
          />
        </div>
      </div>
      
    </div>
  )
}

export default DashboardOverviewPage;