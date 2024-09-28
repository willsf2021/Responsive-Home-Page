import React from "react";
import { StyledAside } from "./Aside.styled";
import phonesPicture from "../../../assets/images/illustration-phones.svg";

function Aside() {
  return (
    <StyledAside>
      <img className="aside" src={phonesPicture} alt="" />
      <h1>State of the Art Infrastructure</h1>
      <p>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </StyledAside>
  );
}

export default Aside;
