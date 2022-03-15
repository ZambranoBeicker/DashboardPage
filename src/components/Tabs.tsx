import * as React from "react";
import { Tabs as ChakraTabs, Tab, TabList } from "@chakra-ui/react";

interface TabsProps {
  valueList: string[];
  children: React.ReactNode;
}

export default function Tabs({ valueList, children }: TabsProps) {
  return (
    <ChakraTabs
      color="#828282"
      borderBottomColor="border"
      _selected={{ color: "blue.primary" }}
      px="4"
    >
      <TabList>
        {valueList.map((value, i) => (
          <React.Fragment key={i}>
            <Tab
              px="10"
              _selected={{ color: "blue.dark", borderColor: "blue.dark" }}
            >
              {value}
            </Tab>
          </React.Fragment>
        ))}
        {children}
      </TabList>
    </ChakraTabs>
  );
}
