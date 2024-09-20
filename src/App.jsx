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

      <main className="flex w-full mx-auto max-w-[1320px] pb-[130px]">
        <div className="w-full max-w-[66%]  flex flex-col">
          <Hero />
          <Carousel />
          <Accordion />
        </div>
        <div className="flex-auto">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
