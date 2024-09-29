import styled from "styled-components";
import { theme } from "../../theme";

export const StyledFooter = styled.footer`
  background-color: ${theme.neutral.veryDarkBlackBlue};
  border-radius: 0px 96px 0px 0px;
  text-align: center;
  padding: 64px 0px;
  margin-top: 88px;

  img {
    padding-bottom: 72px;
  }
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    column-gap:16px;
    padding: 64px 240px 32px 160px;

  }
  img {
    padding-bottom: 72px;
  }
`;
