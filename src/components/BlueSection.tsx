import { Text, Flex } from "@chakra-ui/react";
import Card from "./Card";
import IconButton from "./IconButton";
import Icon from "./Icon";

interface Props {
  children: React.ReactNode;
  withDate?: boolean;
  buttonValue: string;
}
export default function BlueSection({
  children,
  withDate,
  buttonValue,
}: Props) {
  return (
    <Card bgGradient>
      {children}
      <Flex justifyContent="flex-end" align="center">
        {withDate ? (
          <Text mr="auto" fontWeight="bold" fontSize="xl">
            15 - 10 - 2020
          </Text>
        ) : null}
        <IconButton
          bgLight
          icon={<Icon src="./icons/arrow-blue.svg" alt="arrow" />}
        >
          {buttonValue}
        </IconButton>
      </Flex>
    </Card>
  );
}
