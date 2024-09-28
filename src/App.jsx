import React from "react";
import Header from "./components/Header/Index";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export const Arrays = {
  products: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  company: ["About", "Teams", "Blog", "Careers"],
  connect: ["Contact", "Newsletter", "LinkedIn"],
};
export default App;
