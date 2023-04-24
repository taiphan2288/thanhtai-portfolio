import React from "react";
import avatarLogo from "../assets/avatar.jpg";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Card = () => {
  return (
    <div
      className="group relative w-[200px] h-[280px] bg-white shadow-cardShadow
    before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[4px] before:bg-white before:duration-500 before:z-[-99] hover:before:rotate-[20deg]
    after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[4px] after:bg-white after:duration-500 after:z-[-99] hover:after:rotate-[10deg] hover:after:shadow-cardShadow"
    >
      <div className="absolute top-[10px] left-[10px] bottom-[10px] right-[10px] bg-black z-[1] duration-500 group-hover:bottom-[90px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={avatarLogo}
          alt=""
        />
      </div>
      <div className="absolute left-[-10px] right-0 bottom-[5px] h-[80px] uppercase text-center">
        <div className="flex items-center justify-center gap-[10px]">
          <a
            className="hover:opacity-70"
            href="https://www.facebook.com/theremix99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook size={24} />
          </a>
          <a
            className="hover:opacity-70"
            href="https://www.instagram.com/thanhtai.99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={24} />
          </a>
        </div>
        <span className="block font-base mt-[5px] text-red">
          Phan Thanh Tai
        </span>
        <span className="block font-base text-red text-[14px]">
          22.08.1999
        </span>
      </div>
    </div>
  );
};

export default Card;
