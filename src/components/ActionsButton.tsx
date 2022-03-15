import * as React from "react";
import { Button } from "@chakra-ui/react";
import Icon from "./Icon";

interface ActionsButtonProps {
  children: string;
}

export default function ActionsButton({ children }: ActionsButtonProps) {
  return (
    <Button
      bg="#fff"
      display="flex"
      gap="4"
      shadow="5px 3px 15px -5px rgb(0,0,0,0.15)"
      border="1px solid"
      borderColor="border"
      fontWeight="normal"
    >
      {children}
      <Icon src="./icons/arrow-black.svg" rotate="90deg" alt="sljfdnvf" />
    </Button>
  );
}
