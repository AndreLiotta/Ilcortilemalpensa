import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import { useTranslation } from "react-i18next";
import "./Where.css";
import map from "../../assets/mapimage.png";
import mapMobile from "../../assets/mapimage-mobile.png";
import "../Fonts.css";

export default function Where() {
  const { t, i18n } = useTranslation();

  function openInMaps() {
    window.open("https://goo.gl/maps/ybBDCuyTGoUn93GW6");
  }

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
      id="where"
      mb="2.5em"
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontFamily="Cormorant"
        fontWeight="bold"
        pb="0.5em"
        color={headings}
      >
        {t("where")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        textAlign="center"
        color={headings}
      >
        {t("whereText0")} <br/>
        {t("whereText1")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        textAlign="center"
        color={headings}
      >
        {t("whereText3")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        textAlign="center"
        color={headings}
      >
        {t("whereText4")}
      </Text>
      <Flex width={{ base: "100%", md: "60%" }} height="auto">
        <Image src={map} borderRadius="30" display={{base: "none", md: "block"}} shadow="lg"></Image>
        <Image src={mapMobile} display={{base: "block", md: "none"}} shadow="lg"></Image>
      </Flex>
      <Button
        onClick={() => openInMaps()}
        mt="1.5em"
        size={{ base: "md", md: "lg" }}
        backgroundColor={headings}
        color={light}
        id="mapsButton"
        fontFamily="Cormorant"
        fontWeight="bold"
        fontSize="1.5em"
        borderRadius="20"
      >
        {t("openInMaps")}
      </Button>
    </Flex>
  );
}
