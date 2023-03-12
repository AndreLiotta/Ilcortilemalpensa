import {
  Flex,
  Text,
  Icon,
  background,
  transition,
  ScaleFade,
} from "@chakra-ui/react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import { useTranslation } from "react-i18next";
import whatsappIcon from "@mui/icons-material/WhatsApp";
import mailIcon from "@mui/icons-material/MailOutline";
import phoneIcon from "@mui/icons-material/PhoneOutlined";

export default function Info() {
  const { t, i18n } = useTranslation();

  function infoButtonAction(action : string) {
    if (action == "email") {
      window.open('mailto:ilcortile@hotmail.it');
    } else if (action == "phone") {
      window.open('tel:00393471106528')
    } else if(action =="whatsapp") {
      window.open('https://api.whatsapp.com/send?phone=393471106528')
    }
  }

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pb={{ base: "8", md: "12" }}
      id="info"
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontFamily="Cormorant"
        fontWeight="bold"
        pb="0.5em"
        color={headings}
      >
        {t("info")}
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
      <Flex width={{ base: "80%", md: "25%" }} justifyContent="space-between">
        <ScaleFade initialScale={1} in={true} whileHover={{ scale: 1.1 }}>
          <Flex
            border="solid 5px"
            borderColor={headings}
            borderRadius="50"
            onClick={() => infoButtonAction("email")}
          >
            <Icon
              as={mailIcon}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              margin="1em"
              color={headings}
            ></Icon>
          </Flex>
        </ScaleFade>
        <ScaleFade initialScale={1} in={true} whileHover={{ scale: 1.1 }}>
          <Flex
            border="solid 5px"
            borderColor={headings}
            borderRadius="50"
            onClick={() => infoButtonAction("phone")}
          >
            <Icon
              as={phoneIcon}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              margin="1em"
              color={headings}
            ></Icon>
          </Flex>
        </ScaleFade>
        <ScaleFade initialScale={1} in={true} whileHover={{ scale: 1.1 }}>
          <Flex
            border="solid 5px"
            borderColor={headings}
            borderRadius="50"
            onClick={() => infoButtonAction("whatsapp")}
          >
            <Icon
              as={whatsappIcon}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              margin="1em"
              color={headings}
            ></Icon>
          </Flex>
        </ScaleFade>
      </Flex>
    </Flex>
  );
}
