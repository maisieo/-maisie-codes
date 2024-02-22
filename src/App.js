
import './App.scss';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ContactForm from './components/ContactForm/ContactForm';
function App() {
  return (
    <div className="App">
        <Header/>
        <IntroSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactForm/>
        <Header/>
    </div>
  );
}

export default App;
