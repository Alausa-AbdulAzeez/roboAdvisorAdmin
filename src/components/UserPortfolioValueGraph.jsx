import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UserPortfolioValueGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ stroke: "#1E1E1E", strokeWidth: 0.3 }}
          tickLine={false}
          className="text-[12px] max-2xl:text-[11px]"
          hide={true}
        />
        <YAxis
          axisLine={false}
          orientation="right"
          dataKey="uv"
          tick={{ stroke: "#1E1E1E", strokeWidth: 0.1 }}
          tickLine={false}
          tickFormatter={(tick) => `${tick}m`}
          allowDataOverflow={true}
          className="text-[12px] max-2xl:text-[11px]"
          tickCount={6}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#005AE0"
          strokeWidth={2}
          fillOpacity={1}
          fill="#005AE01A"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default UserPortfolioValueGraph;
