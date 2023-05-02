import {
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  Box,
} from "@chakra-ui/react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import "./RoomCard.css";
import { useTranslation } from "react-i18next";
import "../Fonts.css";
import Carousel from "../Carousel/Carousel";
import { bgcolor } from "@mui/system";

function RoomCard({
  img,
  text,
  title,
}: {
  img: string;
  text: string;
  title: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
  return (
    <Flex
      maxW="sm"
      rounded="2xl"
      shadow="lg"
      position="relative"
      backgroundImage={img}
      backgroundSize="100% 100%"
      height={{ base: "10em", md: "20em" }}
      width="90%"
      margin="1.5"
      alignItems="end"
      justifyContent="center"
    >
      <Button
        onClick={() => {
          onOpen();
        }}
        m={4}
        background={headings}
        borderRadius="20"
        size={{ base: "md", md: "lg" }}
        _hover={{
          bg: light,
        }}
        className="group"
      >
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          fontFamily="Cormorant"
          color={light}
          _groupHover={{
            color: headings
          }}
        >
          {t("discover")}
        </Text>
      </Button>

      {/* MODALE SCHERMO INTERO PER MOBILE */}
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent backgroundColor={backgroundBrown}>
          <ModalHeader fontFamily="Cormorant" fontSize="3xl" color={headings}>
            {title}
          </ModalHeader>
          <ModalCloseButton size="xl" py="1.6em" px="1em" color={headings} />
          <ModalBody fontWeight="semibold" fontSize="lg" color={headings}>
            {text}
            {/* <Box mt="1em">
              <Carousel></Carousel>
            </Box> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default RoomCard;
