import { React, useState } from "react";
import { StyledMobileMenu, Ul } from "./MobileMenu.styled";
import NavItem from "./NavItem/NavItem";

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
            subItems={["...", "...", "..."]}
          />
          <NavItem
            nameItem="Company"
            onClick={handleItemClick}
            isOpen={showSubItems === "Company"}
            subItems={["...", "...", "..."]}
          />
          <NavItem
            nameItem="Connect"
            onClick={handleItemClick}
            isOpen={showSubItems === "Connect"}
            subItems={["Contact", "Newsletter", "LinkedIn"]}
          />
        </Ul>
        <hr />
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
