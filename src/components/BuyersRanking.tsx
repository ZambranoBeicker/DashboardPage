import { Fragment } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Card from "./Card";
import Icon from "./Icon";
import DetailsBox from "./DetailsBox";

export default function BuyersRanking() {
  return (
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
          <Fragment key={i}>
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
          </Fragment>
        ))}
      </Box>
    </Card>
  );
}
