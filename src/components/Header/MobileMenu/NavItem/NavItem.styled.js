import styled from "styled-components";
import { theme } from "../../../../theme";

export const StyledNavItem = styled.li`
  display: flex;
  flex-direction: column;
  color: ${theme.primary.veryDarkBlue};

  p:hover {
    color: black;
    font-weight: 600;
  }
  div {
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
  }

  ul {
    cursor: pointer;
    font-size: 16px;
    list-style: none;
    text-align: center;
    background-color: ${theme.neutral.grayishBlueMobileMenu};
    border-radius: 5px;
    color: ${theme.neutral.veryDarkBlue};
    font-weight: 600;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding: 24px 0px;
    margin: 24px 0px 0px;
    li:hover {
      color: black;
      font-weight: 600;
    }
  }
`;

export const Arrow = styled.img`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
