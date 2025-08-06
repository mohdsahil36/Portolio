import LinkedinIcon from "@/public/assets/LinkedIn_icon.svg.webp";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { FiSmartphone } from "react-icons/fi";
import GithubIcon from "@/public/assets/github.jpeg";
import XIcon from "@/public/assets/Twitter.avif";

export const Socials = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/mohd-sahil-siddiqui-021a11201/",
    username: "@ Mohd Sahil Siddiqui",
  },
  {
    name: "Github",
    icon: GithubIcon,
    link: "https://github.com/mohdsahil36",
    username: "@ mohdsahil36",
  },
  {
    name: "Twitter",
    icon: XIcon,
    link: "https://x.com/LuciFeR8382",
    username: "@ LuciFeR8382",
  },
];

export const Contact = [
  {
    index: "1",
    icon: <TfiLocationPin />,
    text: "Bengaluru, India",
    link: "https://maps.app.goo.gl/rddZcH9yqKXZKkr39",
  },
  {
    index: "2",
    icon: <TfiEmail />,
    text: "mohdsahilsiddiqui36@gmail.com",
    link: "mailto:mohdsahilsiddiqui36@gmail.com",
  },
  {
    index: "3",
    icon: <FiSmartphone />,
    text: "+91 7398010954",
    link: "tel:+917398010954",
  },
];
