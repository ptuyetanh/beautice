import React from "react";
import footerLogo from "@/assets/images/footerLogo.svg";
import facebook from "@/assets/images/facebook.svg";
import twitter from "@/assets/images/twitter.svg";
import linkedin from "@/assets/images/linkedin.svg";
import youtube from "@/assets/images/youtube.svg";
import instagram from "@/assets/images/instagram.svg";
import bottomBG from "@/assets/images/bottomBG.svg";
import FooterPages from "./FooterPages";
import arrowUp from "@/assets/images/arrowUp.svg";
import { PATHS } from "../routes/paths";
function Footer() {
  const pages = [
    { name: "Home", link: PATHS.HOME },
    { name: "About", link: PATHS.ABOUT },
    { name: "Services", link: PATHS.SERVICE },
    { name: "Gallery", link: PATHS.GALLERY },
    {name: "Team", link: PATHS.TEAM },
  ];
  const informations = [
    { name: "Terms & Conditions", link: "/terms" },
    { name: "Privacy Policy", link: "/privacy" },
  ];
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="left">
          <img src={footerLogo} alt="" className="logo-white" />
          <div className="intro">
            <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
          </div>
          <div className="contact">
            <div className="address">Baker Steet 101, NY, United States.</div>
            <div className="phone">
              <a href="tel:+521 569 8966 345">+521 569 8966 345</a>
            </div>
            <div className="email">
              <a href="mailto:mail@company.com">mail@company.com</a>
            </div>
          </div>
        </div>
        <div className="right">
          <FooterPages name={"Pages"} pages={pages} />
          <FooterPages name={"Informations"} pages={informations} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="left">
          <a href="#">
            <img src={facebook} alt="facebook-f" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>
        <div className="right">
          © AltDesain Studio 2021 - All right reserved.
        </div>
      </div>
      <div className="bottomBG">
        <img src={bottomBG} alt="" className="bottomBG" />
      </div>
      <div className="arrowUp" onClick={handleScrollToTop}>
        <button>
          <img src={arrowUp} alt="" />
        </button>
      </div>
    </footer>
  );
}
export default Footer;
