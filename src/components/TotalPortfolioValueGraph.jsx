import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E1E] w-[90px] h-[19px] rounded-[100px] py-[2px] px-[4px] flex items-center text-white justify-center font-[400] text-[14px]">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const TotalPortfolioValueGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="70%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#005AE01A" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#005AE01A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ stroke: "#1E1E1E", strokeWidth: 0.2 }}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          dataKey="uv"
          tick={{ stroke: "#1E1E1E", strokeWidth: 0.2 }}
          tickLine={false}
          tickFormatter={(tick) => `${tick}m`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#1E1E1E" }} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#005AE0"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TotalPortfolioValueGraph;
