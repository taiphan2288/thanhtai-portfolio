import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import closeIcon from "../assets/close-icon.svg";
import { motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className="hover:text-yellow dark:text-white dark:hover:text-yellow"
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav
      className={`${navbarBackground} z-50 w-full fixed top-0 py-6 px-32 xs:px-4 sm:px-8 md:px-16`}
    >
      <div className="flex items-center justify-between w-full">
        <h4 className="font-playfair text-3xl font-bold dark:text-white">TT</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <motion.button
            className={`rounded-full p-2 ${
              isTopOfPage ? "bg-red" : "bg-white "
            }`}
            onClick={() => setIsMenuToggled((isMenuToggled) => !isMenuToggled)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CgMenuGridR
              size={24}
              className={`${isTopOfPage ? "text-white" : "text-red "}`}
            />
          </motion.button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && (
          <motion.div
            className="fixed right-0 bottom-0 h-full bg-primary w-[300px]"
            initial={{ opacity: 0, x: "100%" }}
            animate={isMenuToggled ? "open" : "closed"}
            transition={{ duration: 0.6 }}
            variants={variants}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12 ">
              <button
                className="p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <img className="" alt="close-icon" src={closeIcon} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl ">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Education"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
