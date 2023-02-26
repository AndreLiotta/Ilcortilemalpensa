import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import heroImg from "../../assets/HeroImg.jpg";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import "./Hero.css";
import logoLight from "../../assets/logo-light.png";

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
      <Box backgroundColor="rgba(69, 89, 49, 0.6)" p={5} borderRadius={{base: 25, md:50}} my={20} display={{base: "none", md: "block"}}>
        <Text className="heroText" color={light} align="center" fontSize={{base: "3xl", md:"6xl"}}>
          B&B
        </Text>
        <Text className="heroText" color={light} align="center" fontSize={{base: "3xl", md:"6xl"}}>
          IL CORTILE
        </Text>
      </Box>
      <Box backgroundColor="rgba(69, 89, 49, 0.7)" p={4} borderRadius={{base: 25, md:50}} display={{base: "block", md: "none"}} my={12}>
        <Image src={logoLight} height='32' alt="Il cortile Malpensa Logo"/>
      </Box>
    </Flex>
  );
}
