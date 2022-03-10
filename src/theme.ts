import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
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
    // ...
  },
});

// 2. Call `extendTheme` and pass your custom values

export default theme;
