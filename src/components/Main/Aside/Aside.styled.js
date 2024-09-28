import styled from "styled-components";
import { theme } from "../../../theme";
import backgroundImage from "../../../assets/images/bg-pattern-circles.svg"


export const StyledAside = styled.aside`
 position: relative;
  background: url(${backgroundImage});
  background-position: right 50% top -216px;
  background-size: 572px;
  background-repeat: no-repeat;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 224px 32px 104px;
  font-family: "Overpass", sans-serif;
  border-radius: 0px 96px 0px 96px;

  &::before {
    content: '';
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

  img.aside {
    width:368px;
    top: -184px;
    position: absolute;    
}
  h1 {
    text-align:center;
    font-weight:500;
    font-size: 36px;
    color: white;
}
p {
    text-align:center;
    font-size: 16px;
    color: white;
    line-height: 1.6rem;
    font-weight:300;
}
`