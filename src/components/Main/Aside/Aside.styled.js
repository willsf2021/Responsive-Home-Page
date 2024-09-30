import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledAside = styled.aside`
  position: relative;
  background-position: right 50% top -216px;
  background-size: 572px;
  background-repeat: no-repeat;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 24px;
  padding: 224px 32px 104px;
  font-family: "Overpass", sans-serif;
  border-radius: 0px 96px 0px 96px;
  
  @media (min-width: 1346px) {
    margin-top: 0px;
    background-size: 1040px;
    background-position: left -67% top -536px;
    flex-direction: row;
    justify-content: flex-end;
    padding: 120px 176px 104px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${theme.gradientBody.veryDarkGrayBlue},
      ${theme.gradientBody.veryDarkDesaturatedBlue}
    );
    border-radius: 0px 96px 0px 96px;
    z-index: -1;
  }

  img {
    width: 368px;
    top: -184px;
    position: absolute;
    @media (min-width: 1346px) {
      width: 540px;
      top: -64px;
      left: 112px;
    }
  }
`;

export const StyledArticleContainer = styled.div`
  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    color: white;
  }
  p {
    text-align: center;
    font-size: 16px;
    color: white;
    line-height: 1.6rem;
    font-weight: 300;
  }
  @media (min-width: 1346px) {
    
    p {
      text-align: left;
      max-width: 520px;
    }
    h1 {
      margin-bottom: 24px;
      text-align: left;
      max-width: 540px;
      font-size: 40px;
    }

    display: flex;
    flex-direction: column;
  
  }
`;
