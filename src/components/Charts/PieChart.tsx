import * as React from "react";
import { ResponsivePie } from "@nivo/pie";
import chakraTheme, { chartsTheme as theme } from "../../theme";
import CustomLabel from "./CustomLabel";

interface PieChartProps {
  data: any[];
  mt?: number;
  mb?: number;
}

export default function PieChart({ data, mt, mb }: PieChartProps) {
  return (
    <ResponsivePie
      theme={theme}
      colors={{ scheme: "blue_purple" }}
      margin={{ top: mt ? mt : 0, bottom: mb ? mb : 0 }}
      data={data}
      enableArcLinkLabels={false}
      innerRadius={0.85}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: mb ? mb : 16,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      layers={["arcs", Layer, "arcLabels", "legends", "arcLinkLabels"]}
      arcLabelsComponent={({ datum, label, style }) => {
        const y =
          Math.cos(datum.arc.endAngle) *
          (datum.arc.innerRadius + datum.arc.thickness / 2) *
          -1;

        const x =
          Math.sin(datum.arc.endAngle) *
          (datum.arc.innerRadius + datum.arc.thickness / 2);

        return (
          <CustomLabel
            width={datum.arc.thickness * 1.25}
            label={label}
            posX={x}
            posY={y}
            style={{
              textColor: "white",
              bgColor: theme.colors.blue.primary,
              borderColor: "white",
            }}
          />
        );
      }}
    />
  );
}

const Layer = (props: any) => {
  console.log({ props });

  const arc = props.dataWithArc[0].arc;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="dots">
        <circle
          cx={props.centerX}
          cy={props.centerY}
          r={arc.outerRadius}
          fill="rgba(0,0,250,0.25)"
          stroke="#F2F2F2"
          strokeWidth="5"
        />
        <circle
          cx={props.centerX}
          cy={props.centerY}
          r={arc.innerRadius}
          fill="white"
          stroke="#F2F2F2"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
};
