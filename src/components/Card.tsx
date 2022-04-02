import * as React from "react";
import { Box } from "@chakra-ui/react";

interface CardProps {
  children: React.ReactNode;
  width?: string;
  bgGradient?: boolean;
  withoutPadding?: boolean;
}

export default function Card({
  width,
  withoutPadding,
  children,
  bgGradient,
}: CardProps) {
  if (bgGradient) {
    return (
      <Box
        borderRadius="md"
        mb="4"
        p={withoutPadding ? "0" : "4"}
        shadow="5px 6px 15px #00000014"
        width={{ base: "100%", lg: width ? width : "auto" }}
        bgGradient="linear(to-r, #09BEE6, #1A2EAB)"
        color="#fff"
        overflow="hidden"
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      overflow="hidden"
      borderRadius="md"
      mb="4"
      p={withoutPadding ? "0" : "4"}
      shadow="5px 6px 15px #00000014"
      width={{ base: "100%", lg: width ? width : "auto" }}
      bg="#fff"
    >
      {children}
    </Box>
  );
}
