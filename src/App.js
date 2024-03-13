
import './App.scss';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <IntroSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactForm/>
        <Footer/>
    </div>
  );
}

export default App;
