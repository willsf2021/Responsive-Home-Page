import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Paragraph from "../Paragraph/Paragraph";
import { StyledArticle } from "./Article.styled";

function Article({ title, subTitle, paragraph }) {
  return (
    <StyledArticle>
      <SubTitle subTitle={subTitle} />
      <Paragraph paragraph={paragraph} />
    </StyledArticle>
  );
}

export default Article;
