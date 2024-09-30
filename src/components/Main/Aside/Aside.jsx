import React from "react";
import { StyledAside, StyledArticleContainer } from "./Aside.styled";
import phonesPicture from "../../../assets/images/illustration-phones.svg";
import backgroundImageAside from "../../../assets/images/bg-pattern-circles.svg";

function Aside() {
  return (
    <StyledAside
      style={{
        backgroundImage: `url(${backgroundImageAside})`,
      }}
    >
      <img className="aside" src={phonesPicture} alt="" />
      <StyledArticleContainer>
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </StyledArticleContainer>
    </StyledAside>
  );
}

export default Aside;
