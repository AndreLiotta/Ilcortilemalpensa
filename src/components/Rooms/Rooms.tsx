import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { headings } from "../../Colors";
import RoomCard from "../RoomCard/RoomCard";

import doubleRoom from "../../assets/doubleRoom.jpg";
import double1 from "../../assets/double1.jpg";
import double2 from "../../assets/double2.jpg";
import double3 from "../../assets/double3.jpg";
import double4 from "../../assets/double4.jpg";
import double5 from "../../assets/double5.jpg";
import double6 from "../../assets/double6.jpg";

import familyRoom from "../../assets/familyRoom.jpg";
import family1 from "../../assets/family1.jpg";
import family2 from "../../assets/family2.jpg";
import family3 from "../../assets/family3.jpg";
import family4 from "../../assets/family4.jpg";
import family5 from "../../assets/family5.jpg";
import family6 from "../../assets/family6.jpg";
import family7 from "../../assets/family7.jpg";
import family8 from "../../assets/family8.jpg";
import family9 from "../../assets/family9.jpg";

import "../Fonts.css";

const familyRoomCards: string[] = [
  familyRoom,
  family1,
  family2,
  family3,
  family4,
  family5,
  family6,
  family7,
  family8,
  family9,
];

const doubleRoomCards: string[] = [
  doubleRoom,
  double1,
  double2,
  double3,
  double4,
  double5,
  double6
];

export default function Rooms() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
      mb="2.5em"
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
            img={doubleRoom}
            text={t("doubleRoomText")}
            title={t("doubleRoomTitle")}
            cards={doubleRoomCards}
            price={t("doubleRoomPrice")}
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
            img={familyRoom}
            text={t("familyRoomText")}
            title={t("familyRoomTitle")}
            cards={familyRoomCards}
            price={t("familyRoomPrice")}
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
