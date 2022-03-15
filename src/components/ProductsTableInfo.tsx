import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

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
