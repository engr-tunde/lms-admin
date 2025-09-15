const DashboardNavBar = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
};

export default DashboardNavBar;
