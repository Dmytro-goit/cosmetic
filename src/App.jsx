import Header from "./components/Header";
import Hero from "./components/Hero";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Services from "./components/Services";
import About from "./components/About";
import Specialists from "./components/Specialists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Specialists />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
