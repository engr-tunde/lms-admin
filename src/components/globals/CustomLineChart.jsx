import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { totalSales } from "../../data/analyticsData"


const CustomLineChart = ({ data, month }) => {

  const firstItem = data[0] || {};
  const possibleKeys = ["value", "total"];
  const valueKey = possibleKeys.find((k) => k in firstItem);

  const dateItem = data[0] || {};
  const possibleDateKeys = ["day", "date"];
  const dateKey = possibleDateKeys.find((k) => k in dateItem);


  const firstDate = data[0]?.[dateKey];
  const lastDate = data[data.length - 1]?.[dateKey];

  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const rangeLabel = `${formatDate(firstDate)} - ${formatDate(lastDate)}`;

  return (
    <div className="border-gray-500 rounded-xl w-full h-full py-4">
      {/* <div className="text-sm text-green-500 mb-6">{"+3.3% from last month"}</div> */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 2,
            // right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#D1D5DB" vertical={false} />
          <XAxis
            dataKey={dateKey}
            axisLine={false}
            tick={{ fill: "#999" }}
            tickLine={false}
            tickMargin={10}
          />
          {/* <YAxis
            axisLine={false}
            tick={{ fill: "#999" }}
            tickLine={false}
            tickMargin={20}
          /> */}
          <Tooltip />
          <Legend
            align="start"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "30px", paddingBottom: "10px" }}
          />
          <Line
            type="monotone"
            dataKey={valueKey}
            name={rangeLabel}
            stroke="#777"
            legendType="circle"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
