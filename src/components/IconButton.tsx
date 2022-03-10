import * as React from "react";

import { Button } from "@chakra-ui/react";

interface IconButtonProps {
  children: string;
  icon: any;
}

export default function IconButton({ children, icon }: IconButtonProps) {
  return (
    <Button
      fontWeight="light"
      display="flex"
      gap="3"
      bg="blue.buttons"
      color="#fff"
    >
      {children}
      {icon}
    </Button>
  );
}
