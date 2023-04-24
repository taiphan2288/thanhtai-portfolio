import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red flex flex-col items-center justify-around">
      <div className="w-10/12 flex flex-col justify-between items-center">
        <SocialMediaIcons />
        <p className="font-playfair font-semibold text-2xl text-yellow">
          THANH TAI
        </p>
      </div>
      <p className="font-playfair text-md text-yellow">
        ©2023 Tai. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
