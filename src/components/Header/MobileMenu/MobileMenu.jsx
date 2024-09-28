import { React, useState } from "react";
import { StyledMobileMenu, Ul } from "./MobileMenu.styled";
import NavItem from "./NavItem/NavItem";
import { Arrays } from "../../../App";

function MobileMenu() {
  const [showSubItems, setShowsubItems] = useState(null);

  const handleItemClick = (itemName) => {
    setShowsubItems(showSubItems === itemName ? null : itemName);
  };

  
  return (
    <StyledMobileMenu>
      <nav>
        <Ul>
          <NavItem
            nameItem="Products"
            onClick={handleItemClick}
            isOpen={showSubItems === "Products"}
            subItems={Arrays.products}
          />
          <NavItem
            nameItem="Company"
            onClick={handleItemClick}
            isOpen={showSubItems === "Company"}
            subItems={Arrays.company}
          />
          <NavItem
            nameItem="Connect"
            onClick={handleItemClick}
            isOpen={showSubItems === "Connect"}
            subItems={Arrays.connect}
          />
        </Ul>
        <hr />
        <div className="button">
          <button>Login</button>
          <button className="mobileButton">Sign Up</button>
        </div>
      </nav>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
