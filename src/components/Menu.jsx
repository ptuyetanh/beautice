import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "@/routes/paths";

function Menu({mobileMenu}) {

return (
    <nav className={`nav ${mobileMenu ? 'show' : ''}`}>
        <NavLink to = {PATHS.HOME} className="nav-link">Home</NavLink>
        <NavLink to = {PATHS.ABOUT} className="nav-link">About</NavLink>
        <NavLink to = {PATHS.SERVICE} className="nav-link">Service</NavLink>
        <NavLink to = {PATHS.GALLERY} className="nav-link">Gallery</NavLink>
        <NavLink to={PATHS.BLOG} className="nav-link">Blog</NavLink>
        <NavLink to={PATHS.CONTACT} className="nav-link btn-default">Contact</NavLink>
    </nav>
);
}
export default Menu;
