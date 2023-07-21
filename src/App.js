import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

// components
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Particle from "./components/Particle";
import About from "./pages/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Particle />
      <div className="bg-light w-full min-h-screen dark:bg-dark">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <div className="w-full px-32 xs:px-4 sm:px-8 md:px-16">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Home setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>

        <div className="w-full px-32 xs:px-4 sm:px-8 md:px-16">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("about")}
          >
            <About />
          </motion.div>
        </div>

        <div className="w-full px-32 xs:px-4 sm:px-8 md:px-16">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("education")}
          >
            <Education />
          </motion.div>
        </div>

        <div className="w-full px-32 xs:px-4 sm:px-8 md:px-16">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <Skills />
          </motion.div>
        </div>

        <div className="w-full px-32 xs:px-4 sm:px-8 md:px-16">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
