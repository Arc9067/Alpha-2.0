import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();

    document.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "lazy");
    });
  }, []);
  return (
    <div className="min-h-screen w-full relative text-white font-sans flex justify-center flex-col items-center overflow-x-hidden">
      <Header />
      <Hero />
      <About />

      <Mics />
      <Footer />
    </div>
  );
};

export default App;
