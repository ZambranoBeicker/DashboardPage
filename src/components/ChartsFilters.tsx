import * as React from "react";
import { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";

export default function ChartsFilters({
  filterNames,
}: {
  filterNames: string[];
}) {
  const [index, setIndex] = useState(0);

  return (
    <Flex
      overflow="hidden"
      borderRadius="md"
      border="1px solid"
      borderColor="blue.buttons"
    >
      {filterNames.map((filter, i) => (
        <React.Fragment>
          <Button
            onClick={() => setIndex(i)}
            color={index === i ? "white" : "gray"}
            borderRadius="0"
            margin="0"
            fontWeight="normal"
            bg={index === i ? "blue.buttons" : "white"}
            borderRight={i < filterNames.length - 1 ? "1px solid " : "0"}
            borderColor={i < filterNames.length - 1 ? "blue.buttons" : "none"}
          >
            {filter}
          </Button>
        </React.Fragment>
      ))}
    </Flex>
  );
}
