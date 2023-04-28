import React, { useState, useEffect } from "react";
// import axios
import axios from "axios";
// import icons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
  BsFillSunFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";
import Calendar from "./Calendar";
import { MoonIcon, SunIcon } from "./DarkModeIcons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

// api key
const APIkey = "da54fc0223f0cade3b9ff4cc97642159";

const Weather = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Hanoi");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [mode, setMode] = useThemeSwitcher();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // if input value is not empty
    if (inputValue !== "") {
      // set location
      setLocation(inputValue);
    }

    // select input
    const input = document.querySelector("input");

    // clear input
    input.value = "";

    // prevent defaults
    e.preventDefault();
  };

  // fetch the data
  useEffect(() => {
    // set loading to true
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

    axios
      .get(url)
      .then((res) => {
        // set the data after 1500 ms
        setTimeout(() => {
          setData(res.data);
          // set loading to false
          setLoading(false);
        }, 400);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  // error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 400);
    // clear timer
    return () => clearTimeout(timer);
  }, [errorMsg]);

  // if data is false show the loader
  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-white" />
        </div>
      </div>
    );
  }

  // set the icon according to the weather
  let icon;

  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }

  // date object
  const date = new Date();

  return (
    <div
      className="w-full flex border-2 border-red justify-center items-center py-9 px-3 rounded-[16px] shadow-box-shadow-dark 
    lg:flex-col lg:py-4 xs:border-none dark:shadow-box-shadow-white"
    >
      {/* Calendar and dark mode */}
      <div className="flex flex-col items-center justify-between gap-y-2">
        <div className="">
          <Calendar />
        </div>

        <div className="">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`rounded-full p-2 flex items-center justify-center ${
              mode === "light" ? "bg-pink text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              // <SunIcon className="fill-dark" />
              <BsFillSunFill size={24} />
            ) : (
              // <MoonIcon className="fill-dark" />
              <BsFillMoonStarsFill size={24} />
            )}
          </button>
        </div>
      </div>

      {/* line */}
      <div className="w-[3px] h-[360px] bg-pink rounded-md mx-2 lg:w-5/6 lg:h-1 lg:my-4"></div>

      {/* Weather */}
      <div className="flex flex-col px-4 lg:px-0">
        {/* form */}
        <div
          className="h-14 bg-pink w-full
            rounded-full backdrop-blur-[10px] mb-6 dark:bg-pink"
        >
          <div
            className={"h-full relative flex items-center justify-between p-2 "}
          >
            <input
              onChange={(e) => handleInput(e)}
              className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
              type="text"
              placeholder="Search by city or country"
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-[#1BB5EC] hover:bg-[#15abdd] w-16 h-10 rounded-full flex justify-center items-center transition"
            >
              <IoMdSearch className="text-2xl text-white" />
            </button>
          </div>
        </div>
        {/* card */}
        <div className="w-[20rem] bg-pink text-white backdrop-blur-[10px] rounded-[16px] py-10 px-6 dark:bg-pink">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <ImSpinner8 className="text-white text-4xl animate-spin" />
            </div>
          ) : (
            <div>
              {/* card top */}
              <div className="flex items-center gap-x-5">
                {/* icon */}
                <div className="text-[67px]">{icon}</div>
                <div>
                  {/* country name */}
                  <div className="text-xl font-semibold">
                    {data.name}, {data.sys.country}
                  </div>
                  {/* date */}
                  <div>
                    {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                    {date.getUTCFullYear()}
                  </div>
                </div>
              </div>
              {/* card body */}
              <div className="my-6">
                <div className="flex justify-center items-center">
                  {/* temp */}
                  <div className="text-[80px] leading-none font-light">
                    {parseInt(data.main.temp)}
                  </div>
                  {/* celsius icon */}
                  <div className="text-4xl">
                    <TbTemperatureCelsius />
                  </div>
                </div>
                {/* weather description */}
                <div className="capitalize text-center">
                  {data.weather[0].description}
                </div>
              </div>
              {/* card bottom */}
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2 ">
                    {/* icon */}
                    <div className="text-[18px]">
                      <BsEye />
                    </div>
                    <div className="text-sm">
                      Visibility{" "}
                      <span className="ml-2">{data.visibility / 1000} km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 ">
                    {/* icon */}
                    <div className="text-[18px]">
                      <BsThermometer />
                    </div>
                    <div className="flex text-sm">
                      Feels like
                      <div className="flex ml-2">
                        {parseInt(data.main.feels_like)}
                        <TbTemperatureCelsius />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2 ">
                    {/* icon */}
                    <div className="text-[18px]">
                      <BsWater />
                    </div>
                    <div className="text-sm">
                      Humidity
                      <span className="ml-2">{data.main.humidity} %</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 ">
                    {/* icon */}
                    <div className="text-[18px]">
                      <BsWind />
                    </div>
                    <div className="text-sm">
                      Wind <span className="ml-2">{data.wind.speed} m/s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
