
import './App.scss';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';
import ProjectSection from './components/ProjectSection/ProjectSection';

function App() {
  return (
    <div className="App">
        <Header/>
        <IntroSection/>
        <SkillSection/>
        <ProjectSection/>
    </div>
  );
}

export default App;
