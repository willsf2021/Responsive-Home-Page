import { theme } from "../../theme.js";
import { StyledMain } from "./Main.styled.js";
import Section from "./Section/Section.jsx";
import Aside from "./Aside/Aside.jsx";
import editorMobile from "../../assets/images/illustration-editor-mobile.svg";
import lapTopMobile from "../../assets/images/illustration-laptop-mobile.svg";

function Main() {
  return (
    <StyledMain>
      <Section
        srcImg={editorMobile}
        altImg={"Editor Picture Mobile"}
        title="Designed for the future"
        colorTitle={theme.primary.veryDarkBlue}
        subTitle={[
          "Introducing an extensible editor",
          "Robust content management",
        ]}
        paragraph={[
          "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
          "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
        ]}
      />

      <Aside
        title="State of the Art Infrastructure"
        paragraph="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
      />

      <Section
        srcImg={lapTopMobile}
        altImg={"Laptop Picture Mobile"}
        subTitle={["Free, open, simple", "Powerful tooling"]}
        paragraph={[
          "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
          "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
        ]}
      />
    </StyledMain>
  );
}

export default Main;
