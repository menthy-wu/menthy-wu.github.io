import {
  BiLogoJavascript,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoPostgresql,
  BiLogoJava,
  BiSolidFileCss,
  BiLogoUnity,
  BiLogoGoogleCloud,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoGithub,
  BiEnvelope,
  BiLogoLinkedinSquare,
  BiLogoInstagram,
} from "react-icons/bi";
import {
  TbBrandCSharp,
  TbBrandNextjs,
  TbBrandFramerMotion,
} from "react-icons/tb";
import {
  SiExpo,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";
import { FaGamepad } from "react-icons/fa";

const iconClassName = "";
export const techIcons = {
  JavaScript: <BiLogoJavascript className={iconClassName} />,
  Python: <BiLogoPython className={iconClassName} />,
  "C++": <BiLogoCPlusPlus className={iconClassName} />,
  "C#": <TbBrandCSharp className={iconClassName} />,
  SQL: <BiLogoPostgresql className={iconClassName} />,
  Java: <BiLogoJava className={iconClassName} />,
  HTML: <BiLogoHtml5 className={iconClassName} />,
  CSS: <BiSolidFileCss className={iconClassName} />,
  Git: <BiLogoGit className={iconClassName} />,
  Unity3D: <BiLogoUnity className={iconClassName} />,
  "Google Cloud Platform": <BiLogoGoogleCloud className={iconClassName} />,
  "React.js": <BiLogoReact className={iconClassName} />,
  "Next.js": <TbBrandNextjs className={iconClassName} />,
  TailwindCSS: <BiLogoTailwindCss className={iconClassName} />,
  Expo: <SiExpo className={iconClassName} />,
  "Framer Motion": <TbBrandFramerMotion className={iconClassName} />,
  Firebase: <BiLogoFirebase className={iconClassName} />,
  "Adobe Photoshop": <SiAdobephotoshop className={iconClassName} />,
  Figma: <SiFigma className={iconClassName} />,
  "Adobe Illustrator": <SiAdobeillustrator className={iconClassName} />,
  Github: <BiLogoGithub className={iconClassName} />,
  Game: <FaGamepad className={iconClassName} />,
  Email: <BiEnvelope className={iconClassName} />,
  LinkedIn: <BiLogoLinkedinSquare className={iconClassName} />,
  Instagram: <BiLogoInstagram className={iconClassName} />,
};

export const techStacks = {
  "Programming Languages": [
    "JavaScript",
    "Python",
    "C++",
    "C#",
    "SQL",
    "Java",
    "HTML",
    "CSS",
  ],
  "Developer Tools": ["Git", "Unity3D", "Google Cloud Platform"],
  Framework: [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Expo",
    "Framer Motion",
    "Firebase",
  ],
  Design: ["Adobe Photoshop", "Figma", "Adobe Illustrator"],
};