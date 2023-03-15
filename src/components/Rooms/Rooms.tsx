import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import RoomCard from "../RoomCard/RoomCard";
import RoomCardImg1 from "../../assets/RoomCardImg1.jpg";
import RoomCardImg2 from "../../assets/RoomCardImg2.jpg";
import "../Fonts.css";

export default function Rooms() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
      id="rooms"
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontFamily="Cormorant"
        fontWeight="bold"
        py="0.2em"
        color={headings}
      >
        {t("rooms")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        textAlign="center"
        color={headings}
      >
        {t("roomsText")}
      </Text>
      <Flex
        width={{ base: "90%", md: "80%" }}
        alignItems="center"
        justifyContent="space-around"
      >
        <Flex
          direction="column"
          width={{ base: "90%", md: "80%" }}
          alignItems="center"
        >
          <RoomCard
            img={RoomCardImg1}
            text={t("doubleRoomText")}
            title={t("doubleRoomTitle")}
          />
          <Text
            fontFamily="Cormorant"
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="semibold"
            color={headings}
            mt="1.5"
          >
            {t("doubleRoomTitle")}
          </Text>
        </Flex>

        <Flex
          direction="column"
          width={{ base: "90%", md: "80%" }}
          alignItems="center"
        >
          <RoomCard
            img={RoomCardImg2}
            text={t("familyRoomText")}
            title={t("familyRoomTitle")}
          />
          <Text
            fontFamily="Cormorant"
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="semibold"
            color={headings}
            mt="1.5"
          >
            {t("familyRoomTitle")}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
