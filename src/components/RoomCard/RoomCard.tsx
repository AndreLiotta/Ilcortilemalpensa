import {
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import { useBreakpointValue } from "@chakra-ui/react";

const Overlay = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

function RoomCard({ img }: { img: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<Overlay />);

  const breakPoint = useBreakpointValue(
    {
      base: 'base',
      md: 'md',
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    },
  )

  function handleModal(breakPoint : any) {
    if (breakPoint === 'md') {

    }
  }

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
      width="80%"
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
      >
        <Text
          fontSize={{ base: "md", md: "3xl" }}
          fontFamily="Cormorant"
          color={light}
        >
          Scopri
        </Text>
      </Button>

      {/* MODALE SCHERMO INTERO PER MOBILE */}
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent backgroundColor={backgroundBrown}>
          <ModalHeader fontFamily="cormorant" fontSize="2em">Modal Title</ModalHeader>
          <ModalCloseButton size="xl" py="1.6em" px="1em"/>
          <ModalBody>TESTO TESTO</ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default RoomCard;
