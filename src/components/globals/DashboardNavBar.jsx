const DashboardNavBar = ({ title, subtitle }) => {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="text-xl font-semibold">{title}</div>
      {subtitle && (
        <div className="text-gray-500">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default DashboardNavBar;
