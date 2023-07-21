import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center my-4 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/theremix99/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="facebook-link" src={facebookLogo} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/thanhtai.99/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="instagram-link" src={instagramLogo} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
