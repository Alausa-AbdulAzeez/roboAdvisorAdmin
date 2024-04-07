//

import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 350 },
  { name: "Group D", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = [
  "#0082E0",
  "#00E0D3",
  "#00E09D",
  "#E04300",
  "#E09400",
  "#005AE0",
];

export default class GeneralDoughnutChart extends PureComponent {
  render() {
    return (
      <PieChart width={362} height={163} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={77}
          cy={77}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
