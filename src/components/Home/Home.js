// Home.js
import React from "react";
import Header from "./Header/Header";
import IntroSection from "./IntroSection/IntroSection";
import SkillSection from "./SkillSection/SkillSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <IntroSection />
      <SkillSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
