// Home.js
import React from "react";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import SkillSection from "./components/SkillSection/SkillSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

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
