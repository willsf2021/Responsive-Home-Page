import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledMobileMenu = styled.div`
  position: absolute;
  left: 16px;
  top: 112px;
  width: 327px;
  background-color: white;
  padding: 32px 24px;
  border-radius: 5px;
  box-shadow: 0px 3px 16px 1px rgb(0, 0, 0, 0.3);

  hr {
    opacity: 30%;
    margin: 24px 0px;
  }

  div.button {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 12px;

    button {
      padding: 14px 0px;
      font: 700 18px Overpass, sans-serif;
      color: ${theme.neutral.veryDarkGrayishBlue};
      width: 136px;
      border-radius: 32px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    button:nth-child(1) {
      background-color: transparent;
      border: none;
      &:hover {
        color: black;
      }
    }
    button:nth-child(2) {
      color: white;
      background: linear-gradient(
        to right,
        ${theme.gradient.veryLightRed},
        ${theme.gradient.lightRed}
      );
      border: none;
    }
    button:nth-child(2):active {
      background: linear-gradient(
        to right,
        ${theme.gradient.veryLightRed},
        ${theme.gradient.veryLightRed}
      );
    }
   
  }
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
