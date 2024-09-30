import { React, useState, useEffect } from "react";
import { StyledHeader, NavBar, Presentation, Buttons } from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import logo from "../../assets/images/logo.svg";
import iconOpen from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";
import backgroundImage from "../../assets/images/bg-pattern-intro-mobile.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função que verifica a largura da viewport
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Aciona a ação quando a largura é menor ou igual a 768px
      } else {
        setIsMobile(false); // Define como false para larguras maiores que 768px
      }
    };

    // Adiciona o listener para o evento de resize
    window.addEventListener("resize", handleResize);

    // Chama a função na montagem inicial para verificar a largura inicial
    handleResize();

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <NavBar>
        <img src={logo} alt="Logo Blogr" />
        {isMobile ? (
          <>
            <img
              onClick={toggleMenu}
              src={isMenuOpen ? iconClose : iconOpen}
              alt="Hamburger Icon"
            />
            {isMenuOpen && (
              <MobileMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            )}
          </>
        ) : (
          <>{/*AQUI VAI O MENU DESKTOP*/}</>
        )}
      </NavBar>
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
