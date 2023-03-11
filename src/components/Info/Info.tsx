import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import { useTranslation } from "react-i18next";
import infoIcon from "@mui/icons-material/InfoOutlined";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

export default function Info() {
  const { t, i18n } = useTranslation();

  function sendEmail() {
    console.log("email sent")
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
      <Flex>
        <Flex border="solid 5px" borderColor={headings} borderRadius="50" onClick={() => sendEmail()}>
          <EmailIcon w={8} h={8} margin="1em" color={headings} />
        </Flex>
        <Flex border="solid 5px" borderColor={headings} borderRadius="50" onClick={() => sendEmail()}>
          <PhoneIcon w={8} h={8} margin="1em" color={headings} />
        </Flex>
      </Flex>
    </Flex>
  );
}
