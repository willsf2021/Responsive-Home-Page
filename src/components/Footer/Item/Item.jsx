import { StyledItem, StyledSubItem } from "./Item.styled";

function Item({ item, subItem }) {
  return (
    <StyledItem>
      <h2>{item}</h2>
      <ul>
        {subItem?.length > 0 &&
          subItem.map((subItemi, index) => (
            <StyledSubItem key={index}>{subItemi}</StyledSubItem>
          ))}
      </ul>
    </StyledItem>
  );
}

export default Item;
