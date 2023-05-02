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
} from "@chakra-ui/react";
import RoomCardImg1 from "../../assets/Gallery/RoomCardImg1.jpg";
import RoomCardImg2 from "../../assets/Gallery/RoomCardImg2.jpg";
import Giardino1 from "../../assets/Gallery/giardino1.jpg";
import Giardino2 from "../../assets/Gallery/giardino2.jpg";
import Giardino3 from "../../assets/Gallery/giardino3.jpg";
import Giardino4 from "../../assets/Gallery/giardino4.jpg";
import Giardino5 from "../../assets/Gallery/giardino5.jpg";
import { useTranslation } from "react-i18next";
import { backgroundBrown, headings } from "../../Colors";
import "./Gallery.css";
import Footer from "../Footer/Footer";
import backButtonIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import React from "react";
const pictures: any[] = [
  {
    src: RoomCardImg1,
    title: "titolo",
    isPic: true,
  },
  {
    src: RoomCardImg2,
    title: "titolo",
    isPic: true,
  },
  {
    src: Giardino1,
    title: "titolo",
    isPic: true,
  },
  {
    src: Giardino2,
    title: "titolo",
    isPic: true,
  },
  {
    src: Giardino3,
    title: "titolo",
    isPic: true,
  },
  {
    src: Giardino4,
    title: "titolo",
    isPic: true,
  },
  {
    src: Giardino5,
    title: "titolo",
    isPic: true,
  },
];
export default function Gallery() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language)
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
  const initialRef = React.useRef(null);
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding={{ base: "0.5em", md: "1em" }}
        ref={initialRef}
        tabIndex={-1}
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
      </Flex>
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
          <ModalCloseButton size="lg" variant="ghost" color={headings} />
          <ModalBody padding="0">
            <Image src={img} w="100%" h="100%" borderRadius="md"></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
