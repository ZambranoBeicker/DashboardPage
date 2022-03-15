import * as React from "react";
import { ResponsiveLine } from "@nivo/line";
import chakraTheme, { chartsTheme as theme } from "../../theme";
import CustomLabel from "./CustomLabel";

interface BarChartProps {
  data: any[];
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export default function BarChart({ data, mt, mb, ml, mr }: BarChartProps) {
  return (
    <ResponsiveLine
      margin={{
        top: mt ? mt : 0,
        bottom: mb ? mb : 0,
        left: ml ? ml : 0,
        right: mr ? mr : 0,
      }}
      theme={theme}
      enableSlices="x"
      enableCrosshair={true}
      yScale={{
        type: "linear",
        max: 55,
      }}
      data={data}
      enableGridY
      enableGridX={false}
      lineWidth={3}
      curve="monotoneX"
      colors={["#028ee6", "#774dd7"]}
      pointSize={12}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      axisLeft={{
        format: (value) => `${value}K`,
      }}
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
