import * as React from "react";
import { Checkbox, Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import ActionsButton from "./ActionsButton";
import DetailsBox from "./DetailsBox";

export default function ProductsTable() {
  return (
    <Box bg="white" p="4" pt="0">
      {new Array(10).fill(undefined).map((_, i) => (
        <React.Fragment key={i}>
          <Product />
        </React.Fragment>
      ))}
    </Box>
  );
}

const Product = () => {
  const commonProps = {
    height: "max-content",
    paddingBottom: "1.5rem",
  };

  return (
    <Flex
      py="2"
      borderRadius="md"
      border="1px solid"
      borderColor="border"
      mb="4"
    >
      <DetailsBox styles={{ px: "3", gap: "3", display: "flex" }} withoutBorder>
        <Checkbox size="lg" />
        <Box>
          <Image fit="contain" src="./images/img.png" alt="Product image" />
        </Box>
        <Box>
          <Text fontWeight="bold">Nombre</Text>
          <Text>Zapatos elegantes para caballeros</Text>
          <Text fontWeight="bold">SKU: 0102938849302938494</Text>
        </Box>
      </DetailsBox>

      <DetailsBox styles={{ ...commonProps }}>
        <Text fontWeight="bold">Fecha de vencimiento</Text>
        <Text>No Aplica</Text>
      </DetailsBox>
      <DetailsBox styles={{ ...commonProps }}>
        <Text fontWeight="bold">Categoría de producto</Text>
        <Text>Zapatos para caballero</Text>
      </DetailsBox>
      <DetailsBox styles={{ ...commonProps }}>
        <Text fontWeight="bold">Cantidad de existencias</Text>
        <Text>255 / unidades</Text>
      </DetailsBox>
      <DetailsBox styles={{ ...commonProps }}>
        <Text fontWeight="bold">Precio</Text>
        <Text>Q. 1,223.25</Text>
      </DetailsBox>
      <DetailsBox
        styles={{
          ...commonProps,
          py: ".875rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ActionsButton>Acciones</ActionsButton>
      </DetailsBox>
    </Flex>
  );
};
