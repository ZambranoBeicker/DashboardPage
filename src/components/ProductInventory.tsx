import { Flex, Text } from "@chakra-ui/react";
import Card from "./Card";
import IconButton from "./IconButton";
import Icon from "./Icon";

export default function ProductInventory() {
  return (
    <Card width="32%">
      <Text>N° de productos en inventario</Text>
      <Flex
        alignItems="center"
        width="100%"
        mt="2"
        justifyContent="space-between"
      >
        <Text fontWeight="bold">1230</Text>
        <IconButton
          icon={<Icon src="./icons/arrow-white.svg" alt="Arrow Icon" />}
        >
          Ver detalles
        </IconButton>
      </Flex>
    </Card>
  );
}
