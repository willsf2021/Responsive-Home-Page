import React from "react";
import { StyledParagraph } from "./Paragraph.styled";

function Paragraph({ paragraph }) {
  return <StyledParagraph>{ paragraph }</StyledParagraph>;
}

export default Paragraph;
