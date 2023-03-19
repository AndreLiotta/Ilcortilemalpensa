import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  ScaleFade,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import { useTranslation } from "react-i18next";
import { backgroundBrown, headings, light, navBackground } from "../../Colors";
import roomsIcon from "@mui/icons-material/BedOutlined";
import galleryIcon from "@mui/icons-material/LocalFloristOutlined";
import servicesIcon from "@mui/icons-material/RoofingOutlined";
import whereIcon from "@mui/icons-material/PinDropOutlined";
import infoIcon from "@mui/icons-material/InfoOutlined";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import enFlag from "../../assets/us.svg";
import itFlag from "../../assets/it.svg";
import "../Fonts.css";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: any;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "rooms", icon: roomsIcon as IconType, link: "#rooms" },
  { name: "services", icon: servicesIcon as IconType, link: "#services" },
  { name: "where", icon: whereIcon as IconType, link: "#where" },
  { name: "info", icon: infoIcon as IconType, link: "#info" },
  { name: "gallery", icon: galleryIcon as IconType, link: "/gallery" },
];

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue(backgroundBrown, "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { t, i18n } = useTranslation();
  const onClickLanguageChange = (e: any) => {
    const language = e;
    i18n.changeLanguage(language);
  };

  return (
    <Box
      bg={useColorModeValue(backgroundBrown, "gray.900")}
      borderRight="2px"
      borderRightColor={useColorModeValue(navBackground, "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="end">
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          size="lg"
          color={headings}
        />
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Image src={logo} height="40" alt="Il cortile Malpensa Logo" />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          color={headings}
          link={link.link}
          onClick={onClose}
        >
          {t(link.name)}
        </NavItem>
      ))}
      <Flex justifyContent="center" mt="10">
        <ScaleFade
          initialScale={1}
          in={true}
          whileHover={{ scale: 1.1 }}
          onClick={() => onClickLanguageChange("it")}
        >
          <Image src={itFlag} h={{ base: "24px", md: "32px" }} mr="1em" _hover={{cursor: "pointer"}}></Image>
        </ScaleFade>
        <ScaleFade
          initialScale={1}
          in={true}
          whileHover={{ scale: 1.1 }}
          onClick={() => onClickLanguageChange("en")}
        >
          <Image src={enFlag} h={{ base: "24px", md: "32px" }} mr="1em" _hover={{cursor: "pointer"}}></Image>
        </ScaleFade>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
  link: string;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      className="navItem"
    >
      <Flex
        align="center"
        p="5"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: headings,
          color: light,
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="32"
            _groupHover={{
              color: light,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  function handleOpenClick() {
    onOpen();
    setYOffset(0);
    setVisible(false);
  }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="14"
      alignItems="center"
      bg={useColorModeValue(navBackground, "gray.900")}
      justifyContent="flex-start"
      {...rest}
      position="sticky"
      zIndex="999"
      width="100%"
      id="navbar"
      top={visible ? "0" : "-150"}
    >
      <IconButton
        variant="ghost"
        onClick={() => handleOpenClick()}
        aria-label="open menu"
        icon={<FiMenu size={32} color={backgroundBrown} />}
      />
      <Flex justifyContent="center" alignItems="center" width="75%">
        <Text
          fontSize="3xl"
          fontFamily="cormorant"
          fontWeight="bold"
          display={{ md: "none" }}
          color={backgroundBrown}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Il cortile B&B
        </Text>
      </Flex>
    </Flex>
  );
};
