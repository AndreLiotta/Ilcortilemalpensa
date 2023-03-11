import {
  Flex,
  Text,
  Image,
  Icon,
  ScaleFade,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import parkingIcon from "@mui/icons-material/LocalParkingOutlined";
import airportShuttleIcon from "@mui/icons-material/AirportShuttleOutlined";
import breakfastIcon from "@mui/icons-material/BakeryDiningOutlined";
import wifiIcon from "@mui/icons-material/Wifi";
import airConditioningIcon from "@mui/icons-material/AcUnitOutlined";
import petFriendlyIcon from "@mui/icons-material/PetsOutlined";
import { useRef } from "react";
import { IconType } from "react-icons";
import { useInViewport } from "react-in-viewport";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  text: string;
}

// "airportShuttle": "Navetta Aeroportuale",
// "parking": "Parcheggio",
// "breakfast": "Colazione",
// "wifi": "WiFi",
// "airConditioning": "Aria condizionata",
// "petFriendly": "Pet friendly"

export default function Services() {
  const { t, i18n } = useTranslation();

  const services: Array<ServiceCardProps> = [
    {
      icon: airportShuttleIcon as IconType,
      title: t("airportShuttle"),
      text: t("airportShuttleText"),
    },
    {
      icon: parkingIcon as IconType,
      title: t("parking"),
      text: t("parkingText"),
    },
    {
      icon: breakfastIcon as IconType,
      title: t("breakfast"),
      text: t("breakfastText"),
    },
    {
      icon: petFriendlyIcon as IconType,
      title: t("petFriendly"),
      text: t("petFriendlyText"),
    },
    {
      icon: wifiIcon as IconType,
      title: t("wifi"),
      text: t("wifiText"),
    },
    {
      icon: airConditioningIcon as IconType,
      title: t("airConditioning"),
      text: t("airConditioningText"),
    },
  ];

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
        {t("services")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        fontFamily="Cormorant"
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        fontWeight="semibold"
        textAlign="center"
        color={headings}
      >
        {t("servicesText1")}
      </Text>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        fontFamily="Cormorant"
        pb="0.7em"
        width={{ base: "90%", md: "80%" }}
        fontWeight="semibold"
        textAlign="center"
        color={headings}
      >
        {t("servicesText2")}
        <br />
        {t("servicesText3")}
      </Text>
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
        {services.map((service: ServiceCardProps, index) => (
          <GridItem pb="2em">
            <ServiceCard
              icon={service.icon}
              title={service.title}
              text={service.text}
            ></ServiceCard>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

const ServiceCard = ({ icon, title, text }: ServiceCardProps) => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-50px" },
    { disconnectOnLeave: true },
    {}
  );

  return (
    <ScaleFade
      initialScale={0.9}
      in={enterCount > 0}
      whileHover={{ scale: 1.1 }}
    >
      <Flex
        flexDirection="column"
        ref={ref}
        alignItems="center"
        justifyContent="center"
        color={headings}
      >
        <Icon
          fontSize={{ base: "32", md: "48" }}
          _groupHover={{
            color: light,
          }}
          as={icon}
          color={headings}
        />
        <Text
          fontFamily="Cormorant"
          fontWeight="bold"
          fontStyle="italic"
          fontSize={{ base: "lg", md: "2xl" }}
        >
          {title}
        </Text>
        <Text
          align="center"
          fontFamily="Cormorant"
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight="semibold"
          w={{ base: "60%", md: "40%" }}
        >
          {text}
        </Text>
      </Flex>
    </ScaleFade>
  );
};
