import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import heroImg from "../../assets/HeroImg.jpg";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import "./Hero.css";

export default function Hero() {
  return (
    <Flex
      width="100%"
      backgroundImage={heroImg}
      bgSize="cover"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box backgroundColor="rgba(69, 89, 49, 0.6)" p={5} borderRadius={{base: 25, md:50}} my={20}>
        <Text className="heroText" color={light} align="center" fontSize={{base: "3xl", md:"6xl"}}>
          B&B
        </Text>
        <Text className="heroText" color={light} align="center" fontSize={{base: "3xl", md:"6xl"}}>
          IL CORTILE
        </Text>
      </Box>
    </Flex>
  );
}
