
import './App.scss';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';

function App() {
  return (
    <div className="App">
        <Header/>
        <IntroSection/>
        <SkillSection/>
    </div>
  );
}

export default App;
