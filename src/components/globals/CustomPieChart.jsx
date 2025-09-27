import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { deliverySummary } from "../../data/analyticsData"

const CustomPieChart = ({ data, title }) => {
  return (
    <div className="relative p-4 rounded-md h-[350px] min-w-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={deliverySummary}
            cx="50%"
            cy="50%"
            innerRadius={88}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">{data.reduce((acc, item) => acc + item.value, 0)}</h1>
        <p className="text-sm text-merseLightText font-semibold">{title}</p>
      </div>
      <div className="absolute -bottom-10 -right-12 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-1">
        <div className="flex justify-between items-center w-[140px]">
          <span className="text-sm text-merseLightText">
            <span 
              className={`w-3 h-3 inline-block mr-2`} 
              style={{ backgroundColor: data.find(item => item.name === "Delivered").fill }}
            />
              Delivered
          </span>
          <span 
            className="text-sm text-merseLightText font-semibold"
          >
            {data.find(item => item.name === "Delivered").value}
          </span>
        </div>
        <div className="flex justify-between items-center w-[140px]">
          <span className="text-sm text-merseLightText">
            <span 
              className={`w-3 h-3 inline-block mr-2`} 
              style={{ backgroundColor: data.find(item => item.name === "Pending").fill }}
            />
              Pending
          </span>
          <span 
            className="text-sm text-merseLightText font-semibold"
          >
            {data.find(item => item.name === "Pending").value}
          </span>
        </div>
        <div className="flex justify-between items-center w-[140px]">
          <span className="text-sm text-merseLightText">
            <span 
              className={`w-3 h-3 inline-block mr-2`} 
              style={{ backgroundColor: data.find(item => item.name === "Returned").fill }}
            />
              Returned
          </span>
          <span 
            className="text-sm text-merseLightText font-semibold"
          >
            {data.find(item => item.name === "Returned").value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;
