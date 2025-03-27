import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaX } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { text } from "stream/consumers";

export const MarginX = {
  base: "3%",
  sm: "5%",
  md: "6%",
  lg: "8%",
  xl: "10%",
};

export const socialIcons = [
  {
    link: "https://www.facebook.com/jmassociateske",
    icon: <FaFacebookF />,
    color: "#3b5998",
  },
  {
    link: "https://www.instagram.com/jmassociatesllp",
    icon: <FaInstagram />,
    color: "#c13584",
  },
  {
    link: "https://www.linkedin.com/company/jmassociateske",
    icon: <FaLinkedinIn />,
    color: "linear-gradient(90deg, #0077b5 0%, #0077b5 50%, #0077b5 100%)",
  },
  {
    link: "https://x.com/JMAssociatesLLP",
    icon: <FaX />,
    color: "#000000",
  },
];

export const homectas = [
  {
    icon: <CiLocationOn />,
    text: "FIND US",
    desc: "Westpark Towers",
  },
  {
    icon: <FiPhone />,
    text: "CALL US",
    desc: "(+254) 722 123 456",
  },
];

export const HomeLinks = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about-us",
    text: "About Us",
  },
  {
    link: "/services",
    text: "Services",
  },
  {
    link: "/sectors",
    text: "Sectors",
  },
  {
    link: "/careers",
    text: "Careers",
  },
  {
    link: "/resources",
    text: "Resources",
  },
  {
    link: "/contact-us",
    text: "Contact Us",
  },
];
