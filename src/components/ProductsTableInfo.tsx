import * as React from "react";
import { Checkbox, Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import Icon from "./Icon";

export default function ProductsTable() {
  return (
    <Box px="3" borderRight="1px solid" borderColor="#E0E0E0">
      <Text>Total de productos</Text>
      <Text fontWeight="bold" fontSize="2xl" color="blue.dark">
        152
      </Text>
    </Box>
  );
}
