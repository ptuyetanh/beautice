import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "@/routes/paths";

function Menu({ mobileMenu, setMobileMenu }) {
  const handleMenuClose = () => {
    const nav = document.querySelector(".nav");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
        setMobileMenu(!mobileMenu);
    }
  };
  return (
    <nav className={`nav ${mobileMenu ? "show" : "hidden"}`}>
      <NavLink to={PATHS.HOME} className="nav-link" onClick={handleMenuClose}>
        Home
      </NavLink>
      <NavLink to={PATHS.ABOUT} className="nav-link" onClick={handleMenuClose}>
        About
      </NavLink>
      <NavLink
        to={PATHS.SERVICE}
        className="nav-link"
        onClick={handleMenuClose}
      >
        Service
      </NavLink>
      <NavLink
        to={PATHS.GALLERY}
        className="nav-link"
        onClick={handleMenuClose}
      >
        Gallery
      </NavLink>
      <NavLink to={PATHS.BLOG} className="nav-link" onClick={handleMenuClose}>
        Blog
      </NavLink>
      <NavLink
        to={PATHS.CONTACT}
        className="nav-link btn-default"
        onClick={handleMenuClose}
      >
        Contact
      </NavLink>
    </nav>
  );
}
export default Menu;
