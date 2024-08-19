import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/gopanihardikn" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/gopanihardikn/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/hardik.gopani.3/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/hardik_gopani/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
