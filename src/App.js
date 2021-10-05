import { BrowserRouter as Router,Switch,Route, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Mentor from './components/Mentor/Mentor';
import Notfound from './components/NotFound/Notfound';
import Scholarship from './components/Scholarships/Scholarship';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
      <div className="menu-link text-center">
          <NavLink exact style={{ color: "black", textDecoration: "none", margin: "5px" }} to="/home">Home</NavLink>
          <NavLink exact style={{ color: "black", textDecoration: "none", margin: "5px" }} to="/about">About</NavLink>
          <NavLink exact style={{ color: "black", textDecoration: "none", margin: "5px" }} to="/course">Course</NavLink>
          <NavLink exact style={{ color: "black", textDecoration: "none", margin: "5px" }} to="/mentor">Mentor</NavLink>
          <NavLink exact style={{ color: "black", textDecoration: "none", margin: "5px" }} to="/mentor">Scholarships</NavLink>
        </div>
        <Switch>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route exact path="/course">
        <Course></Course>
      </Route>
      <Route exact path="/mentor">
        <Mentor></Mentor>
      </Route>
      <Route exact path="/scholarship">
        <Scholarship></Scholarship>
      </Route>
      <Route parh="*">
        <Notfound></Notfound>
      </Route>
        </Switch>
      </Router>
     <div>
       <Footer></Footer>
     </div>

    </div>
  );
}

export default App;
