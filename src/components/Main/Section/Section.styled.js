import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../theme";
theme;

export const StyledSection = styled.section`
  @media (min-width: 768px) {
    ${(props) =>
      props.orientationImg === "row-reverse" &&
      css`
        margin-top: -64px;
      `}
    ${(props) =>
      props.orientationImg === "row" &&
      css`
        margin-top: 56px;
      `}
  }
  position: relative;
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
    @media (min-width: 768px) {
      font: 600 40px "Overpass", sans-serif;
      position: relative;
      top: 112px;
    }
  }
  img.section {
    transform: scale(0.96);
  }
`;

export const StyledArticlesContainer = styled.div`
  @media (min-width: 768px) {
    ${(props) =>
      props.orientationImg === "row-reverse" &&
      css`
        Article {
          text-align: left;
          min-width: 520px;
          margin-bottom: 80px;
          margin-left: 300px;
        }
      `}
    ${(props) =>
      props.orientationImg === "row" &&
      css`
        Article {
          text-align: left;
          max-width: 520px;
          margin-bottom: 48px;
          margin-left: -448px;
        }
      `}
  }
`;
export const StyledArticlesPlusImgContainer = styled.div`
  @media (min-width: 768px) {
    ${(props) =>
      props.orientationImg === "row-reverse" &&
      css`
        display: flex;
        align-items: center;
        flex-direction: ${(props) => props.orientationImg};
        img {
          position: relative;
          left: 112px;
          bottom: 56px;
        }
        `}
        ${(props) =>
      props.orientationImg === "row" &&
      css`
        display: flex;
        align-items: center;
        flex-direction: ${(props) => props.orientationImg};
        img {
          position: relative;
          left: -472px;
          bottom: 32px;
        }
      `}
  }
`;
