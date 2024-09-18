//import { useState } from "react";

import Accordion from "./components/Accordion";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Banner />
      <Header />

      <Hero />
      <Carousel />
      <Accordion />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
