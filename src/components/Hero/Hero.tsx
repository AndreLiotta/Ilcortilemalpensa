import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import heroImg from "../../assets/HeroImg.jpg";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import "./Hero.css";
import logoLight from "../../assets/logo-light.png";
import { useTranslation } from "react-i18next";
import "../Fonts.css";

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <Flex direction="column" alignItems="center" mt={{ base: 14, md: 0 }}>
      <Flex
        width="100%"
        backgroundImage={heroImg}
        bgSize="cover"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          backgroundColor="rgba(69, 89, 49, 0.6)"
          p={5}
          borderRadius={{ base: 25, md: 50 }}
          my={20}
          display={{ base: "none", md: "block" }}
        >
          <Text
            className="heroText"
            color={light}
            align="center"
            fontSize={{ base: "3xl", md: "6xl" }}
          >
            B&B
          </Text>
          <Text
            className="heroText"
            color={light}
            align="center"
            fontSize={{ base: "3xl", md: "6xl" }}
          >
            IL CORTILE
          </Text>
        </Box>
        <Box
          backgroundColor="rgba(69, 89, 49, 0.7)"
          p={4}
          borderRadius={{ base: 25, md: 50 }}
          display={{ base: "block", md: "none" }}
          my={12}
        >
          <Image src={logoLight} height="32" alt="Il cortile Malpensa Logo" />
        </Box>
      </Flex>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        fontWeight="semibold"
        textAlign="center"
        mt={{ base: "1em", md: "10" }}
        color={headings}
      >
        {t("intro")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        fontWeight="semibold"
        textAlign="center"
        fontStyle="italic"
        color={headings}
      >
        {t("borges")}
      </Text>
    </Flex>
  );
}
