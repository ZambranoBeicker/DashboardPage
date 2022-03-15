import * as React from "react";
import { Box } from "@chakra-ui/react";

interface DetailsBoxProps {
  children: React.ReactNode;
  styles?: any;
  withoutBorder?: boolean;
}
export default function DetailsBox({
  children,
  styles,
  withoutBorder,
}: DetailsBoxProps) {
  return (
    <Box
      px="3"
      pos="relative"
      borderLeft={withoutBorder ? "0" : "1px solid"}
      borderColor="border"
      {...styles}
    >
      {children}
    </Box>
  );
}
