const ProgressBar = ({
  label = "",
  value = 0,          // number between 0–100
  height = "8px",
  bgColor = "#E5E7EB", // tailwind gray-200
  fillColor = "#10B981", // green
  rounded = "100px",  // fully rounded
  showLabel = true,
  className = "",
}) => {
  return (
    <div className={`w-full h-auto ${className}`}>
      <div className="flex justify-between items-center">
        {showLabel && (
          <>
            <span className="mb-1 font-medium text-gray-800">{label}</span>
            {/* <span className="text-sm">{value}%</span> */}
          </>
        )}
      </div>

      <div
        style={{
          height,
          backgroundColor: bgColor,
          borderRadius: rounded,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            backgroundColor: fillColor,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
