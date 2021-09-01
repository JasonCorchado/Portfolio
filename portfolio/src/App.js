import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';


function App() {
  return (
    <div className = 'App'>
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={ Contact } />
            <Route path="/skills" component={ Skills } />
          </Switch>      
        </div>
      </Router>
    </div>
    
  );
}

export default App;
