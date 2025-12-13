import React from 'react';
import { BookOpen, ShoppingCart, CreditCard, Users, Calendar, DollarSign, ArrowUpRight, Eye, MoreVertical } from 'lucide-react';
import RecentCoursesCard from './RecentCoursesCard';
import RecentOrdersCard from './RecentOrdersCard';
import RecentPaymentsCard from './RecentPaymentsCard';
import RecentUsersCard from './RecentUsersCard';

function OverviewOptions({ recentCourses, recentOrders, recentPayments, recentUsers }) {

  console.log("Recent payments in OverviewOptions:", recentPayments);
  console.log("Recent users in OverviewOptions:", recentUsers);

  return (
    <div className="space-y-8 mt-6">
      {recentCourses ? <RecentCoursesCard recentCourses={recentCourses} /> : null}
      {recentOrders ? <RecentOrdersCard recentOrders={recentOrders} /> : null}
      {recentPayments ? <RecentPaymentsCard recentPayments={recentPayments} /> : null}
      {recentUsers ? <RecentUsersCard recentUsers={recentUsers} /> : null}
    </div>
  );
}

export default OverviewOptions;