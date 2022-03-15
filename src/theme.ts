import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      "span.chakra-checkbox__control": {
        border: "1px solid #BDBDBD",
        background: "transparent",
        shadow: "inset 1px 1px 5px -1px #00000014",
      },
      "span.chakra-checkbox__control[data-focus]": {
        shadow: "0 0 0 2px #08BFE6A0",
      },
      "span.chakra-checkbox__control[data-checked]": {
        background: "#1A2EAB",
      },
      ".custome-scrollbar": {
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          width: "10px",
          borderRadius: "24px",
          background: "#F2F2F2",
          boxShadow: "inset 0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#1A2EAB",
          borderRadius: "24px",
        },
      },
    },
  },
  colors: {
    blue: {
      primary: "#08BFE6",
      dark: "#1A2EAB",
      buttons: "#0160E7",
    },
    bgPrimary: "#F8F8F8",
    gradient: {
      from: "#09BEE6",
      to: "#1A2EAB",
    },
    gray: "#4F4F4F",
    border: "#BDBDBD",
  },
  shadows: {
    shadow: "0px 2px 12px rgba(0, 0, 0, 0.06)",
  },
});

export const chartsTheme = {
  background: "#ffffff",
  textColor: "#828282",
  colors: {
    blue: {
      primary: "#08BFE6",
      dark: "#1A2EAB",
      buttons: "#0160E7",
    },
    bgPrimary: "#F8F8F8",
    gradient: {
      from: "#09BEE6",
      to: "#1A2EAB",
    },
    gray: "#4F4F4F",
    border: "#BDBDBD",
  },
  fontSize: 12,
  axis: {
    domain: {
      line: {
        strokeWidth: 0,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: "#333333",
      },
    },
    ticks: {
      line: {
        strokeWidth: 0,
      },
      text: {
        fontSize: 11,
        fill: "#333333",
      },
    },
  },
  grid: {
    line: {
      stroke: "#828282",
      strokeWidth: 1,
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: "#333333",
      },
    },
    text: {
      fontSize: 11,
      fill: "#333333",
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: "#333333",
      },
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: "#333333",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    outline: {
      stroke: "#000000",
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
  },
  tooltip: {
    container: {
      background: "#ffffff",
      color: "#333333",
      fontSize: 12,
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {},
  },
};

export default theme;
