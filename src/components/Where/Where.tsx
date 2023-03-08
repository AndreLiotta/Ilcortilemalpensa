import { Flex, Text, Image } from "@chakra-ui/react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import logoSVG from "../../assets/logo.svg";
import "./Where.css";

export default function Where() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
      id="services"
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
        fontFamily="Cormorant"
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        fontWeight="semibold"
        textAlign="center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        reprehenderit laudantium error, molestiae asperiores amet tempora, sunt
        animi et incidunt in dolore qui fugiat, obcaecati nobis est ipsa
        exercitationem facere?
      </Text>
      <Flex width={{base:"100%", md:"80%"}} height={{base: "300px", md:"400px"}} id="mapFlex">
        <Map
          initialViewState={{
            latitude: 45.6739616394043,
            longitude: 8.739326477050781,
            zoom: 18,
          }}
          
          dragPan={false}
          scrollZoom={false}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoiYW5kcmVhbGlvdHRhIiwiYSI6ImNsZXI4YTBnZDB1NWEzeG83dmJkaDljZm4ifQ._gXTv-xs8Z7fbeIHX8QR1w"
        >
            <Marker latitude={45.6739616394043} longitude={8.739326477050781} anchor="bottom">
              <Image src={logoSVG} height="100px" background={backgroundBrown}></Image>
            </Marker>
        </Map>
      </Flex>
    </Flex>
  );
}
