import { React, useState } from "react";
import { StyledHeader, NavBar, Presentation, Buttons } from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import logo from "../../assets/images/logo.svg";
import iconOpen from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <NavBar>
        <img src={logo} alt="Logo Blogr" />
        <img
          onClick={toggleMenu}
          src={isMenuOpen ? iconClose : iconOpen}
          alt="Hamburger Icon"
        />
      </NavBar>
      {isMenuOpen && (
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <Presentation>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <Buttons>
          <button>Start for Free</button>
          <button>Learn More</button>
        </Buttons>
      </Presentation>
    </StyledHeader>
  );
}

export default Header;
