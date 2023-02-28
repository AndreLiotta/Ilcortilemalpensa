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
import trainIcon from "@mui/icons-material/TrainOutlined";
import airportShuttleIcon from "@mui/icons-material/AirportShuttleOutlined";
import { useRef } from "react";
import { IconType } from "react-icons";
import { useInViewport } from "react-in-viewport";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  text: string;
}

const services: Array<ServiceCardProps> = [
  {
    icon: trainIcon as IconType,
    title: "Servizio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: airportShuttleIcon as IconType,
    title: "Servizio2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: trainIcon as IconType,
    title: "Servizio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: airportShuttleIcon as IconType,
    title: "Servizio2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: trainIcon as IconType,
    title: "Servizio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: airportShuttleIcon as IconType,
    title: "Servizio2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: trainIcon as IconType,
    title: "Servizio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: airportShuttleIcon as IconType,
    title: "Servizio2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontFamily="Cormorant"
        fontWeight="bold"
        pb="0.5em"
        color={headings}
        id="services"
      >
        {t("services")}
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
          fontSize={{ base: "md", md: "2xl" }}
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
