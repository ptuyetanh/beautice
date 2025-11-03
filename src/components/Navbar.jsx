import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import mainLogo from "../assets/images/mainLogo.svg";
import Menu from "./Menu";
import menuMobile from "../assets/images/menuMobile.svg";
import closeMobile from "../assets/images/closeMobile.svg";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header")
      if(window.pageYOffset > 100 ){
        header.classList.add("nav-scroll");
      }else if(window.pageYOffset < 100){
        header.classList.remove("nav-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <div className="navbar container">
      <Logo src={mainLogo} />
      <Menu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <div className="icon-menu-mobile" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <img src={closeMobile} alt="closeMobile" />
        ) : (
          <img src={menuMobile} alt="menuMobile" />
        )}
      </div>
      </div>
    </header>
  );
}
export default Navbar;
