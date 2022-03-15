import * as React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import {
  pieChartData,
  lineChartData,
  barsChartData,
  barsChartInfo,
} from "./constants";
import LineChart from "./components/Charts/LineChart";
import PieChart from "./components/Charts/PieChart";
import BarChart from "./components/Charts/BarChart";
import Card from "./components/Card";
import IconButton from "./components/IconButton";
import Icon from "./components/Icon";
import DetailsBox from "./components/DetailsBox";
import ChartsFilters from "./components/ChartsFilters";
import HighlightedInfo from "./components/HighlightedInfo";
import ProductsSection from "./components/ProductsSection";

export const App = () => (
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
                  icon={<Icon src="./icons/arrow-white.svg" alt="Arrow Icon" />}
                >
                  Ver detalles
                </IconButton>
              </Flex>
            </Card>
          </React.Fragment>
        );
      })}
    </Flex>

    <Flex gap="4">
      <Card width="68%" withoutPadding>
        <Box p="4" shadow="shadow">
          <Text fontSize="2xl" fontWeight="bold">
            Estadísticas
          </Text>
          <Text>Consulte de forma rápida las estadísticas de su negocio.</Text>
        </Box>

        <Box>
          <Flex
            px="4"
            alignItems="center"
            justifyContent="space-between"
            py="4"
            shadow="shadow"
          >
            <Text>Facturación Neta</Text>
            <ChartsFilters
              filterNames={["Anual", "Mensual", "Semanal", "Diario"]}
            />
          </Flex>
          <Box height="280px">
            <LineChart data={lineChartData} mt={30} mb={30} ml={48} mr={20} />
          </Box>
        </Box>
      </Card>

      <Box minW="32%">
        <Card bgGradient>
          <Text fontSize="md" mb="4">
            Membresía
          </Text>
          <Text fontSize="sm" mb="4">
            Datos restantes
          </Text>
          <Text fontSize="xl" mb="4">
            15 días - 24 horas
          </Text>
          <Text fontSize="sm" mb="4">
            fecha de expiración:
          </Text>
          <Flex>
            <Text mr="auto" fontWeight="bold" fontSize="xl" mb="4">
              15 - 10 - 2020
            </Text>
            <IconButton
              bgLight
              icon={<Icon src="./icons/arrow-blue.svg" alt="arrow" />}
            >
              Renovar
            </IconButton>
          </Flex>
        </Card>
        <Card bgGradient>
          <Text fontSize="md" mb="4">
            Traslados
          </Text>
          <Text fontSize="sm" mb="4">
            En proceso:
          </Text>
          <Text fontWeight="bold" mr="auto" fontSize="xl" mb="4">
            San Isidro a Plaza Bolívar
          </Text>
          <Box marginLeft="auto">
            <IconButton
              bgLight
              icon={<Icon src="./icons/arrow-blue.svg" alt="arrow" />}
              margin="0 0 0 auto"
            >
              Más información
            </IconButton>
          </Box>
        </Card>
      </Box>
    </Flex>
    <Flex gap="3">
      <Card withoutPadding width="45%">
        <Flex
          p="6"
          bgGradient="linear(to-r, gradient.from, gradient.to)"
          color="white"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="lg">Ranking de compradores</Text>
          <Box minWidth="8">
            <Icon src="./icons/download.svg" alt="Download icon" />
          </Box>
        </Flex>
        <Box
          px="3"
          mt="4"
          maxH="400px"
          overflow="auto"
          className="custome-scrollbar"
        >
          {new Array(100).fill(undefined).map((i) => (
            <React.Fragment key={i}>
              <Flex
                mt="2"
                mb="4"
                border="1px solid"
                borderColor="border"
                borderRadius="md"
                py="3"
              >
                <DetailsBox withoutBorder styles={{ pr: "3rem" }}>
                  <Text fontWeight="bold">Nombre</Text>
                  <Text>Marcos Cliente</Text>
                </DetailsBox>
                <DetailsBox>
                  <Text fontWeight="bold">Valor de vida</Text>
                  <Text>Q. 15,256.33</Text>
                </DetailsBox>
                <DetailsBox
                  styles={{ display: "flex", alignItems: "center", px: "6" }}
                >
                  <Icon src="./icons/arrow-blue.svg" alt="slkfndf" />
                </DetailsBox>
              </Flex>
            </React.Fragment>
          ))}
        </Box>
      </Card>
      <Card withoutPadding width="100%">
        <Flex px="4" justifyContent="space-between" py="4" shadow="shadow">
          <Text fontSize="2xl" fontWeight="bold">
            Estadísticas de los compradores
          </Text>
          <ChartsFilters
            filterNames={["Anual", "Mensual", "Semanal", "Diario"]}
          />
        </Flex>
        <Flex gap="4">
          <Box shadow="shadow" position="relative" minH="100%" width="50%">
            <Box
              height="100%"
              position="absolute"
              inset="0"
              maxH="500px"
              pt="2"
              pb="12"
            >
              <Text color="gray" fontWeight="bold" mb="4" textAlign="center">
                Métodos de pagos
              </Text>
              <PieChart mt={20} mb={60} data={pieChartData} />
            </Box>
          </Box>
          <Box pr="4" pb="8" ml="auto" width="50%">
            <Box height="280px" py="2">
              <Text color="gray" fontWeight="bold" mb="4" textAlign="center">
                Métodos de pagos
              </Text>
              <BarChart mt={16} mb={40} data={barsChartData} />
            </Box>
            <HighlightedInfo info={barsChartInfo} />
          </Box>
        </Flex>
      </Card>
    </Flex>

    <ProductsSection />
  </Box>
);
