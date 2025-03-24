import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { scroll } from "../utils";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="z-10 w-11/12 h-10 md:h-[52px] md:w-[550px] rounded-3xl bg-white/15 backdrop-blur-md fixed top-8 py-1 px-2 flex flex-col justify-center"
    >
      <ul className="w-full flex items-center justify-between text-[8px] md:text-base">
        <li onClick={() => scroll("hero")}>
          <img
            src={Logo}
            alt="logo"
            className="w-6 h-6 rounded-full md:w-9 md:h-9 mt-[3px] cursor-pointer hover:scale-105 duration-200"
          />
        </li>
        <li
          onClick={() => scroll("about")}
          className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        >
          About Me
        </li>
        <li
          onClick={() => scroll("projects")}
          className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        >
          Projects
        </li>
        <li
          onClick={() => scroll("certs")}
          className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        >
          Certifications
        </li>
        <li
          onClick={() => scroll("contact")}
          className="p-2 hover:text-cerulean hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        >
          Contact
        </li>
        <a
          href="https://drive.google.com/file/d/1CeG93rXEPxIkTDxInLQTEsA0gkiK0YbK/view?usp=drive_link"
          target="_blank"
          className="flex items-center md:gap-1 bg-cerulean rounded-xl px-1 md:px-2 h-6 md:h-8 hover:bg-[#00579F] hover:scale-105 duration-200 ease-in-out cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-3 md:w-5 md:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
          <span>Resume</span>
        </a>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
