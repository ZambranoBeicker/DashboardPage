import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";
import chakraTheme, { chartsTheme as theme } from "../../theme";
import CustomLabel from "./CustomLabel";

interface BarChartProps {
  data: any[];
  mt?: number;
  mb?: number;
}

export default function BarChart({ data, mt, mb }: BarChartProps) {
  return (
    <ResponsiveBar
      theme={theme}
      margin={{ top: mt ? mt : 0, bottom: mb ? mb : 0 }}
      data={data}
      colors={() => "#08BFE6"}
      labelTextColor="white"
      borderRadius={15}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      barComponent={CustomTick}
    />
  );
}

const CustomTick = ({ bar }: any) => {
  const borderRadius = 8;
  return (
    <g transform={`translate(${bar.x + bar.width / 2.175},${bar.y})`}>
      <rect rx={borderRadius} width={10} height={bar.height} fill={bar.color} />
      <rect
        width={10}
        height={bar.height / 2}
        y={bar.height / 2}
        fill={bar.color}
      />
      <text
        x={50 / 1.5}
        y={bar.height / 2 - 8}
        textAnchor="end"
        dominantBaseline="central"
        fill="white"
        style={{
          fontWeight: 900,
          fontSize: 15,
        }}
      >
        {bar.data.value}
      </text>
    </g>
  );
};
