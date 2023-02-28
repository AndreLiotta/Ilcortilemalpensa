import * as React from "react";
import { ChakraProvider, Text, theme, Flex } from "@chakra-ui/react";
import Sidebar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";

function App() {
  const children = [<Hero />, <Rooms />, <Services />];

  return (
    <ChakraProvider theme={theme}>
      <Sidebar children={children}></Sidebar>
    </ChakraProvider>
  );
}

export default App;
