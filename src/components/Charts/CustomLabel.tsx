import * as React from "react";

interface IStyle {
  textColor: string;
  borderColor: string;
  bgColor: string;
}

interface CustomLabelProps {
  label: string;
  posX: number;
  posY: number;
  width?: number;
  style?: IStyle;
}

export default function CustomLabel({
  label,
  posX,
  posY,
  width,
  style,
}: CustomLabelProps) {
  return (
    <g
      transform={`translate(${posX},${posY})`}
      style={{ pointerEvents: "none" }}
    >
      <circle
        fill={style ? style.bgColor : "#ffffff"}
        stroke={style ? style.borderColor : "black"}
        strokeWidth={5}
        r={width ? width : 15}
      />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fill={style ? style.textColor : "black"}
        style={{
          fontSize: 18,
          fontWeight: 800,
        }}
      >
        {label}
      </text>
    </g>
  );
}
