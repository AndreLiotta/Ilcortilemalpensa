import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Sidebar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import Where from "./components/Where/Where";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";

export default function App() {
  const children = [
    <Hero />,
    <Rooms />,
    <Services />,
    <Where />,
    <Info />,
    <Footer />,
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ChakraProvider theme={theme}>
              <Sidebar children={children}></Sidebar>
            </ChakraProvider>
          }
        />
        <Route
          path="/gallery"
          element={
            <ChakraProvider theme={theme}>
              <Gallery />
            </ChakraProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
