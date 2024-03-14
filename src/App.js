
import './App.scss';
import Home from './components/Home/Home';
// import IntroSection from './components/IntroSection/IntroSection';
// import SkillSection from './components/SkillSection/SkillSection';
// import ProjectSection from './components/ProjectSection/ProjectSection';
// import ContactForm from './components/ContactForm/ContactForm';
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>

        // <Header/>
        // <IntroSection/>
        // <SkillSection/>
        // <ProjectSection/>
        // <ContactForm/>
        // <Footer/>
  )
};

export default App;



