const ErrorWidget = ({ error, color, className }) => {
  return (
    <div
      className={`h-full w-full flex justify-center items-center ${className}`}
      style={{ color }}
    >
      {error?.toString()}
    </div>
  );
};

export default ErrorWidget;
