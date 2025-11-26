function StatusCheck({ value, className }) {
  const statusColors = {
    Draft: 'bg-gray-100 text-gray-700 border border-gray-300',
    Published: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border border-amber-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${statusColors[value] || statusColors.Draft} ${className}`}>
      {value}
    </span>
  );
}

export default StatusCheck;