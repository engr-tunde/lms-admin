function StatusCheck({ value, className, ticker = false }) {
  const statusColors = {
    draft: 'bg-gray-100 text-gray-700 border border-gray-300',
    published: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    pending: 'bg-amber-50 text-amber-700 border border-amber-200',
    active: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    inactive: 'bg-red-100 text-red-700 border border-red-200',
    suspended: 'bg-red-100 text-red-700 border border-red-200',
  };
  const tickerColors = {
    draft: 'bg-gray-500',
    published: 'bg-emerald-500',
    pending: 'bg-amber-500',
    active: 'bg-emerald-500',
    inactive: 'bg-red-500',
    suspended: 'bg-red-500',
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium ${statusColors[value.toLowerCase()] || statusColors.draft} ${className}`}>
      {ticker &&
        <span className={`w-1.5 h-1.5 rounded-full ${tickerColors[value.toLowerCase()] || tickerColors.draft}`} />
      }
      {value}
    </span>
  );
}

export default StatusCheck;