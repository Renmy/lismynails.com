import { useState } from "react";
import Sidebar from "./Sidebar";
import nav_insta from "../images/icons/instagram.svg";
import nav_whatsapp from "../images/icons/whatsapp1.svg";
import nav_tel from "../images/icons/phone.svg";
import nailogo from "../images/icons/nailogo.svg";
import menuopen from "../images/icons/menu-open.svg";
import "../styles/header.css";
import "@fontsource/love-light";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  //-----Modifying Header Menu on Scroll--------------------------------
  let scrollPos = 0;
  let ticking = false;
  const scrollY = 50;
  //-----function overwrite with what should does when scroll-------------
  function OnScroll(scrollPos) {
    const head = document.querySelector(".sticky-header");
    if (scrollPos > scrollY) {
      head.classList.remove("md:w-3/5", "md:rounded-b-xl");
      head.classList.add("md:w-full", "rounded-none");
      head.setAttribute("active", "");
    }
    if (scrollPos < Math.max(scrollY - 20, 0)) {
      head.classList.remove("md:w-full", "rounded-none");
      head.classList.add("md:w-3/5", "md:rounded-b-xl");
      head.removeAttribute("active", "");
    }
  }
  //------Call to function on Scroll eventListener--------------------------------
  document.addEventListener("scroll", (event) => {
    scrollPos = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        OnScroll(scrollPos);
        ticking = false;
      });

      ticking = true;
    }
  });
  //-------------------------------------------------------

  return (
    <header className="sticky sticky-header top-0 z-20 p-2 mx-auto flex justify-between md:w-3/5 md:rounded-b-xl shadow-lg shadow-gray-500 bg-slate-50 transition-all ">
      <a className="logo md:w-1/3 flex items-center px-4 space-x-1" href="/">
        <h1 className="text-pink-500 text-4xl  tracking-wider">Lismy Nails</h1>
        <img src={nailogo.src} alt="nail bottle" className="h-8 scale-125" />
      </a>
      <nav className="hidden md:flex  md:items-center md:text-center md:justify-center md:w-2/3 w-1/2 gap-4 ">
        <div className="flex items-center justify-end space-x-4 w-3/4 px-6">
          <a className="hover:scale-105" href="#about-me">
            Who is Lis?
          </a>
          <a className="hover:scale-105" href="#services">
            Services
          </a>
          <a className="hover:scale-105" href="#">
            Galery
          </a>
          <a className="hover:scale-105" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex justify-center md:gap-4 border-l-2 border-pink-500 items-center w-auto px-10">
          <a
            className="hover:scale-110"
            href="https://www.instagram.com/lismynails/"
            target="_blank"
          >
            <img src={nav_insta.src} alt="instagram" className="my-1" />
          </a>
          <a
            className="hover:scale-110"
            href="http://wa.me/19544775261"
            target="_blank"
          >
            <img src={nav_whatsapp.src} alt="whatsapp" className="my-1" />
          </a>
          <a className="hover:scale-110" href="tel:9544775261" target="_blank">
            <img src={nav_tel.src} alt="telephone" className="my-1" />
          </a>
        </div>
      </nav>
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <img
        src={menuopen.src}
        alt="menu open icon"
        className="block md:hidden"
        onClick={() => setOpenMenu(true)}
      />
    </header>
  );
}
