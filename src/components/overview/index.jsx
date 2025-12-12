import React from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Award, FileText, Clock, Activity } from 'lucide-react';

function OverviewOptions() {
  const stats = [
    { 
      label: 'Total Users', 
      value: '1,234', 
      change: '+12%', 
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500'
    },
    { 
      label: 'Total Courses', 
      value: '23', 
      change: '+3', 
      trend: 'up',
      icon: BookOpen,
      color: 'bg-purple-500'
    },
    { 
      label: 'Active Admins', 
      value: '2', 
      change: 'No change', 
      trend: 'neutral',
      icon: Award,
      color: 'bg-green-500'
    },
    { 
      label: 'Revenue', 
      value: '$45,231', 
      change: '+23%', 
      trend: 'up',
      icon: DollarSign,
      color: 'bg-emerald-500'
    }
  ];

  const recentActivity = [
    { action: 'New user enrolled', course: 'Advanced Psychiatry', time: '2 minutes ago' },
    { action: 'Course published', course: 'Infectious Disease Epidemiology', time: '1 hour ago' },
    { action: 'Admin added', course: 'Tee King', time: '3 hours ago' },
    { action: 'Assessment completed', course: 'Advanced Neurology', time: '5 hours ago' },
    { action: 'New user registered', course: 'Tunde Mudashir', time: '1 day ago' }
  ];

  const courseStats = [
    { label: 'Published', value: 5, color: 'bg-green-500' },
    { label: 'Drafts', value: 18, color: 'bg-yellow-500' },
    { label: 'Archived', value: 0, color: 'bg-gray-400' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 
                  'text-gray-500'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Course Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Course Status</h2>
            </div>
            <div className="space-y-4">
              {courseStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                    <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${stat.color} h-2 rounded-full`} 
                      style={{ width: `${(stat.value / 23) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 px-4 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
              View All Courses
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors text-left flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                Create New Course
              </button>
              <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors text-left flex items-center gap-3">
                <Users className="w-5 h-5" />
                Add New Admin
              </button>
              <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg font-medium hover:bg-green-100 transition-colors text-left flex items-center gap-3">
                <FileText className="w-5 h-5" />
                View Reports
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors text-left flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                Manage Finances
              </button>
            </div>
          </div>

          {/* Platform Health */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Platform Health</h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Completion Rate</span>
                  <span className="text-sm font-bold text-gray-900">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Active Engagement</span>
                  <span className="text-sm font-bold text-gray-900">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Avg. Course Rating</span>
                  <span className="text-sm font-bold text-gray-900">4.6/5.0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.course}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewOptions;