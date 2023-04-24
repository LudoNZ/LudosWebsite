import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//styles
import './App.css';

//Pages + components
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} key='home'/>
          <Route exact path="contact" component={Contact} key='contact'/>
          <Route exact path="/about" component={About} key='about'/>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
