import React from "react";
import { StyledNavItem, Arrow } from "./NavItem.styled";
import arrowDown from "../../../../assets/images/icon-arrow-dark.svg";

function NavItem({ nameItem, subItems, onClick, isOpen }) {
  return (
    <StyledNavItem onClick={() => onClick(nameItem)}>
      <div>
        {nameItem}
        <Arrow src={arrowDown} alt="" isOpen={isOpen} />
      </div>
      {isOpen && subItems && subItems.length > 0 && (
        <ul>
          {subItems.map((subItem, index) => (
            <li key={index}>{subItem}</li>
          ))}
        </ul>
      )}
    </StyledNavItem>
  );
}

export default NavItem;
