import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import RoomCard from "../RoomCard/RoomCard";
import RoomCardImg1 from "../../assets/RoomCardImg1.jpg";
import RoomCardImg2 from "../../assets/RoomCardImg2.jpg";

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
        py="0.5em"
        color={headings}
      >
        {t("rooms")}
      </Text>
      <Text fontSize={{ base: "md", md: "xl" }} fontFamily="Cormorant" pb="0.7em" width={{base: "90%", md: "80%"}}fontWeight="semibold" textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        reprehenderit laudantium error, molestiae asperiores amet tempora, sunt
        animi et incidunt in dolore qui fugiat, obcaecati nobis est ipsa
        exercitationem facere?
      </Text>
      <Flex
        width={{ base: "90%", md: "80%" }}
        alignItems="center"
        justifyContent="space-around"
      >
        {}
        <RoomCard img={RoomCardImg1} />
        <RoomCard img={RoomCardImg2} />
      </Flex>
    </Flex>
  );
}
