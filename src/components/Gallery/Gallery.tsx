import {
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Grid,
  GridItem,
  Text,
  Icon,
  ScaleFade,
  ModalHeader,
} from "@chakra-ui/react";
import RoomCardImg1 from "../../assets/RoomCardImg1.jpg";
import { useTranslation } from "react-i18next";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import "./Gallery.css";
import Footer from "../Footer/Footer";
import backButtonIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import React from "react";

const pictures: any[] = [
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: false,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: false,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box w="full" h="full" bgColor={backgroundBrown}>
      <Flex alignItems="center" mt="1em">
        <Icon
          mx="1em"
          color={headings}
          as={backButtonIcon}
          aria-label="Back button"
          _hover={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="Cormorant"
          fontWeight="bold"
          color={headings}
        >
          {t("gallery")}
        </Text>
      </Flex>

      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
        {pictures.map((pic, index) => renderPicOrTitle(pic, index))}
      </Grid>
      <Footer></Footer>
    </Box>
  );
}

function renderPicOrTitle(pic: any, index: number) {
  if (pic.isPic) {
    return (
      <GridItem pb="1.5em" key={index}>
        <ScaleFade initialScale={1} in={true} whileHover={{ scale: 1.03 }}>
          <GalleryPicture img={pic.src} title={pic.title}></GalleryPicture>
        </ScaleFade>
      </GridItem>
    );
  } else {
    return (
      <GridItem
        pb="0.5em"
        key={index}
        colSpan={{ base: 2, md: 4 }}
        justifyContent="center"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontFamily="cormorant"
          fontWeight="bold"
          color={headings}
        >
          {pic.title}
        </Text>
      </GridItem>
    );
  }
}

function GalleryPicture({ img, title }: { img: string; title: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log();
  const initialRef = React.useRef(null)

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding={{ base: "0.5em", md: "1em" }}
        ref={initialRef} tabIndex={-1}
      >
        <Image
          src={img}
          onClick={onOpen}
          height="auto"
          width="full"
          borderRadius="lg"
          _hover={{ cursor: "pointer" }}
          shadow="md"
        ></Image>
      </Flex >

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "3xl", md: "5xl" }}
        isCentered
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent
          backgroundColor={backgroundBrown}
          justifyContent="center"
          alignItems="center"
        >
          <ModalCloseButton size="lg" variant="ghost" color={headings}/>
          <ModalBody padding="0">
            <Image src={img} width="full" h="auto" borderRadius="md"></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
