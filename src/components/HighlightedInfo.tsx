import * as React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

interface HighlightedInfoProps {
  info: { title: string; metric: string }[];
}

export default function HighlightedInfo({ info }: HighlightedInfoProps) {
  return (
    <Flex w="100%" mt="8">
      {info.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Box
              px="8"
              borderRight={i < info.length - 1 ? "1px solid" : "0"}
              borderColor="border"
              textAlign="left"
            >
              <Text mb="3">{item.title}</Text>

              <Text color="blue.buttons" fontWeight="bold" fontSize="2xl">
                {item.metric}
              </Text>
            </Box>
          </React.Fragment>
        );
      })}
    </Flex>
  );
}
