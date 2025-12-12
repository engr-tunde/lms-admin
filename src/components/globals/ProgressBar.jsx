const ProgressBar = ({
  label = "",
  value = 0,          // number between 0–100
  height = "8px",
  bgColor = "#E5E7EB", // tailwind gray-200
  fillColor = "#9333EA", // purple
  className = "",
  showValue = false
}) => {
  return (
    <div className={`w-full h-auto ${className} flex flex-col gap-3`}>
      <div className="flex justify-between items-center">
        {/* <span className="mb-1 text-xs text-gray-800">{label}</span>   */}
        {showValue && 
          <span className="text-xs">{value}%</span>
        }
      </div>

      <div
        style={{
          height,
          backgroundColor: bgColor,
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
