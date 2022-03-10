import * as React from "react";
import { Box } from "@chakra-ui/react";

interface CardProps {
  bgColor?: string;
  children: React.ReactNode;
  width?: string;
}

export default function Card({ width, bgColor, children }: CardProps) {
  return (
    <Box
      borderRadius="md"
      mb="4"
      p="4"
      bg={bgColor ? bgColor : "#fff"}
      shadow="5px 6px 15px #00000014"
      width={width ? width : "auto"}
    >
      {children}
    </Box>
  );
}
