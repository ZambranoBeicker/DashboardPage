import * as React from "react";
import { ResponsiveLine } from "@nivo/line";
import { chartsTheme as theme } from "../../theme";

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
