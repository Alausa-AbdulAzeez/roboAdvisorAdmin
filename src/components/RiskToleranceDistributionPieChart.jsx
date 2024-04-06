import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 500, style: { strokeWidth: 3 }, fill: "#005AE0" },
  { name: "Group C", value: 150, style: { strokeWidth: 11 }, fill: "#7BD7FF" },
  { name: "Group B", value: 350, style: { strokeWidth: 7 }, fill: "#888DF6" },
];

export default class RiskToleranceDistributionPieChart extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            data={data}
            cx="30%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={this.onPieEnter}
            startAngle={45}
            endAngle={-315}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export class RiskToleranceDistributionPieChartSmall extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            data={data}
            cx="35%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={this.onPieEnter}
            startAngle={45}
            endAngle={-315}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
