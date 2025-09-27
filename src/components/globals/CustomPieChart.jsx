import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { deliverySummary } from "../../data/analyticsData";

const CustomPieChart = ({ data, title }) => {
  return (
    <div className="relative rounded-md h-[300px] min-w-[350px] flex">
      <div className="relative w-full h-full min-w-1/4 overflow-visible">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={360}
              endAngle={0}
              data={deliverySummary}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={130}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold">
            {data.reduce((acc, item) => acc + item.value, 0)}
          </h1>
          <p className="text-sm text-merseLightText font-semibold">{title}</p>
        </div>
      </div>
      <div className="self-end text-center flex flex-col gap-1 pb-4 pr-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-[160px]"
          >
            <span className="text-sm text-merseLightText flex items-center">
              <span
                className="w-3 h-3 inline-block mr-2 rounded-sm"
                style={{ backgroundColor: item.fill }}
              />
              {item.name}
            </span>
            <span className="text-sm text-merseLightText font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPieChart;
