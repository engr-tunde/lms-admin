const FinanceStatCard = ({ title, stats, Icon }) => {
  return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{title}</span>
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">${stats}</p>
          </div>
        </div>
      </div>
  )
}

export default FinanceStatCard;