import styled from "styled-components";
import backgroundImage from "../../assets/images/bg-pattern-intro-mobile.svg";
import { theme } from "../../theme";

export const StyledHeader = styled.header`
  position: relative;
  background: url("../../assets/images/bg-pattern-intro-mobile.svg");
  background-position: bottom -480px left -340px;
  background-repeat: no-repeat;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${theme.gradient.veryLightRed},
      ${theme.gradient.lightRed}
    );
    border-radius: 0px 0px 0px 96px;
    z-index: -1;
  }
  display: flex;
  flex-direction: column;
  row-gap: 112px;
  padding: 48px 24px 160px;
  font-family: "Overpass", sans-serif;
  border-radius: 0px 0px 0px 96px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img:nth-child(1) {
    width: 80px;
  }
`;
export const Presentation = styled.section`
  text-align: center;
  padding: 0px 8px;

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: white;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    color: white;
    margin-bottom: 48px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  button {
    padding: 14px 0px;
    font: 600 16px "Ubuntu", sans-serif;
    width: 136px;
    border-radius: 32px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:nth-child(1) {
    background-color: white;
    color: ${theme.primary.lightRed};
  }
  button:nth-child(1):active {
    background-color: ${theme.primary.veryLightRed};
    border-color: ${theme.primary.veryLightRed};
    color: white;
  }
  button:nth-child(2) {
    background-color: transparent;
    color: white;
  }
  button:nth-child(2):active {
    background-color: white;
    color: ${theme.primary.veryLightRed};
  }
`;
export const Mask1 = styled.section``;
