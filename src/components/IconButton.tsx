import * as React from "react";

import { Button } from "@chakra-ui/react";

interface IconButtonProps {
  children: string;
  icon: any;
  bgLight?: boolean;
  margin?: string;
}

export default function IconButton({
  children,
  icon,
  bgLight,
  margin,
}: IconButtonProps) {
  return (
    <Button
      fontWeight="light"
      display="flex"
      gap="3"
      bg={bgLight ? "#fff" : "blue.buttons"}
      color={bgLight ? "blue.buttons" : "#fff"}
      margin={margin ? margin : "0"}
    >
      {children}
      {icon}
    </Button>
  );
}
