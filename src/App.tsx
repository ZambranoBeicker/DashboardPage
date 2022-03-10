import * as React from "react";
import { ChakraProvider, Flex, Box, Text } from "@chakra-ui/react";
import theme from "./theme";
import Card from "./components/Card";
import IconButton from "./components/IconButton";
import Icon from "./components/Icon";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box px="8" py="3" bg="bgPrimary" minHeight="100vh">
      <Flex alignItems="center" gap="4" mb="4">
        <Text fontSize="xl" fontWeight="bold">
          Dashboard
        </Text>
        <Icon src="./icons/arrow-black.svg" alt="Arrow icon" />
        <Flex
          gap="3"
          py="1"
          px="3"
          alignItems="center"
          borderRadius="md"
          bg="#fff"
        >
          <Text>Todas las tiendas</Text>

          <Icon src="./icons/arrow-black.svg" alt="Arrow icon" />
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        {[1, 2, 3].map((item) => {
          return (
            <React.Fragment key={item}>
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
                    icon={
                      <Icon src="./icons/arrow-white.svg" alt="Arrow Icon" />
                    }
                  >
                    Ver detalles
                  </IconButton>
                </Flex>
              </Card>
            </React.Fragment>
          );
        })}
      </Flex>
    </Box>
  </ChakraProvider>
);
