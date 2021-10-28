import "./App.css";
import Navbar from "./components/navbar";
import { Route, Switch, useLocation } from "react-router-dom";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
