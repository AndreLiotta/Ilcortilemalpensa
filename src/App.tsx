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
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Sidebar from "./components/SideBar/SideBar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar children=''></Sidebar>
  </ChakraProvider>
)
