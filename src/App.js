import './App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Menu/>
      <Switch>
      <div className="ele">
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      </div>
      </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
