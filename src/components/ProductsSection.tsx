import * as React from "react";
import { Flex, Box, Text, Checkbox } from "@chakra-ui/react";
import Card from "./Card";
import Icon from "./Icon";
import ActionsButton from "./ActionsButton";
import Tabs from "./Tabs";
import ProductsTable from "./ProductsTable";
import ProductsTableInfo from "./ProductsTableInfo";
import IconButton from "./IconButton";

export default function ProductsSection() {
  return (
    <Card withoutPadding>
      <Flex
        p="4"
        shadow="shadow"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontWeight="bold" mb="2">
            Productos
          </Text>
          <Text>Consulte y gestione su inventario.</Text>
        </Box>
        <IconButton icon={<Icon src="./icons/arrow-white.svg" alt="arrow" />}>
          Añadir producto
        </IconButton>
      </Flex>

      <Flex py="3">
        {[1, 2, 3, 4].map((item) => (
          <React.Fragment key={item}>
            <ProductsTableInfo />
          </React.Fragment>
        ))}
      </Flex>
      <Box width="100%" overflow="auto" mt="4">
        <Box width="max-content">
          <Tabs
            valueList={[
              "Todos",
              "Más vendidos",
              "Bajo de inventario",
              "Próximo a vencer",
            ]}
          >
            <Box ml="auto" mb="2">
              <IconButton
                icon={<Icon src="./icons/download.svg" alt="Download icon" />}
              >
                Descargar seleccionados
              </IconButton>
            </Box>
          </Tabs>
          <Flex
            my="4"
            px="4"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex gap="2">
              <Checkbox size="lg" />

              <ActionsButton>Acciones</ActionsButton>
            </Flex>

            <ActionsButton>Ordenar</ActionsButton>
          </Flex>
          <ProductsTable />
        </Box>
      </Box>
    </Card>
  );
}
