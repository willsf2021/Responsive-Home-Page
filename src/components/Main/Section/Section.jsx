import { StyledSection } from "./Section.styled";
import Article from "../Article/Article";

function Section({ srcImg, altImg, colorTitle, title, subTitle, paragraph }) {
  return (
    <StyledSection colorTitle={colorTitle}>
      <h1>{title}</h1>
      <img className="section" src={srcImg} alt={altImg} />
      {(subTitle?.length > 0 || paragraph.length > 0) &&
        subTitle.map((subTitle, index) => (
          <Article
            key={index}
            subTitle={subTitle}
            paragraph={paragraph[index]}
          />
        ))}
    </StyledSection>
  );
}

export default Section;
