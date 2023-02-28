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
  ScaleFade,
} from "@chakra-ui/react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import "./RoomCard.css"

const Overlay = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

function RoomCard({ img }: { img: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Flex
        maxW="sm"
        borderWidth="1px"
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
          size={{ base: "md", md: "lg" }}
          _hover={{
            bg: light,
          }}
        >
          <Text
            fontSize={{ base: "md", md: "3xl" }}
            fontFamily="Cormorant"
            color={light}
            _hover={{
              color: headings,
            }}
          >
            Scopri
          </Text>
        </Button>

        {/* MODALE SCHERMO INTERO PER MOBILE */}
        <Modal onClose={onClose} size="full" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent backgroundColor={backgroundBrown}>
            <ModalHeader fontFamily="cormorant" fontSize="2em">
              Modal Title
            </ModalHeader>
            <ModalCloseButton size="xl" py="1.6em" px="1em" />
            <ModalBody>TESTO TESTO</ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
  );
}

export default RoomCard;
