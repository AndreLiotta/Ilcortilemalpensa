import * as React from "react";
import { ChakraProvider, Text, theme, Flex } from "@chakra-ui/react";
import Sidebar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import RoomCard from "./components/RoomCard/RoomCard";
import RoomCardImg1 from "./assets/RoomCardImg1.jpg";
import RoomCardImg2 from "./assets/RoomCardImg2.jpg";
import { useTranslation } from "react-i18next";
import { headings } from "./Colors";

function App() {
  const { t, i18n } = useTranslation();

  const children = [
    <Hero />,
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
    >
      <Text fontSize={{base:"3xl", md:"4xl"}} fontFamily="Cormorant" fontWeight="bold" py="0.5em" color={headings}>{t("rooms")}</Text>
      <Flex
        width={{ base: "90%", md: "80%" }}
        alignItems="center"
        justifyContent="space-around"
      >
        {}
        <RoomCard img={RoomCardImg1} />
        <RoomCard img={RoomCardImg2} />
      </Flex>
    </Flex>,
  ];

  return (
    <ChakraProvider theme={theme}>
      <Sidebar children={children}></Sidebar>
    </ChakraProvider>
  );
}

export default App;
