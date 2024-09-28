import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
theme;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  row-gap: 38px;
  h1 {
    color: ${(props) => props.colorTitle};
    text-align: center;
    font: 600 28px "Overpass", sans-serif;
  }
  img.section {
    transform: scale(0.96)
  }

  
`;
