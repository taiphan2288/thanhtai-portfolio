import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-theme:dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    // check user click mode
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPrefer = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPrefer) {
        // having check in local storage
        let check = userPrefer === "dark" ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // Having no check in local storage and check with the prefer-color-theme:dark
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // set mode
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  // console.log(mode);

  return [mode, setMode];
};

export default useThemeSwitcher;
