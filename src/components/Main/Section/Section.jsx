import {
  StyledSection,
  StyledArticlesContainer,
  StyledArticlesPlusImgContainer,
} from "./Section.styled";
import Article from "../Article/Article";

function Section({
  srcImg,
  altImg,
  colorTitle,
  title,
  subTitle,
  paragraph,
  orientationImg,
}) {
  return (
    <StyledSection colorTitle={colorTitle} orientationImg={orientationImg}>
      <h1>{title}</h1>
      <StyledArticlesPlusImgContainer orientationImg={orientationImg}>
        <img className="section" src={srcImg} alt={altImg} />
        <StyledArticlesContainer orientationImg={orientationImg}>
          {(subTitle?.length > 0 || paragraph.length > 0) &&
            subTitle.map((subTitle, index) => (
              <Article
                key={index}
                subTitle={subTitle}
                paragraph={paragraph[index]}
              />
            ))}
        </StyledArticlesContainer>
      </StyledArticlesPlusImgContainer>
    </StyledSection>
  );
}

export default Section;
