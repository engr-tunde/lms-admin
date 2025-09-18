const DashboardNavBar = ({ title, subtitle, path }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs text-light">{path}</div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
};

export default DashboardNavBar;
