import React from "react";
import { Arrays } from "../../App";
import { StyledFooter } from "./Footer.styled";
import logo from "../../assets/images/logo.svg";
import Item from "./Item/Item";

function Footer() {
  return (
    <StyledFooter>
      <div><img src={logo} alt="" /></div>
      <Item item={"Product"} subItem={Arrays.products}/>
      <Item item={"Company"} subItem={Arrays.company}/>
      <Item item={"Connect"} subItem={Arrays.connect}/> 
    </StyledFooter>
  );
}

export default Footer;
