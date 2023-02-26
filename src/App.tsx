import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import Sidebar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar children={[<Hero/>]} ></Sidebar>
  </ChakraProvider>
)
