import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Mentor from './components/Mentor/Mentor';
import Scholarship from './components/Scholarships/Scholarship';
import NotFound from './components/NotFound/NotFound';
import Images from './Images/logo.png';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <div className="menu-bar">
          <div className="container d-flex align-items-center">
            {/*******************Navigation Bar**************************/}
            <div className="menuBar-img">
              <img src={Images} alt="" />
            </div>
            <NavLink exact style={{ textDecoration: "none", color: "black", margin: "5px" }} to="/">Home</NavLink>
            <NavLink exact style={{ textDecoration: "none", color: "black", margin: "5px" }} to="/about">About </NavLink>
            <NavLink exact style={{ textDecoration: "none", color: "black", margin: "5px" }} to="/scholarship">Scholarships</NavLink>
            <NavLink exact style={{ textDecoration: "none", color: "black", margin: "5px" }} to="/course">Course</NavLink>
            <NavLink exact style={{ textDecoration: "none", color: "black", margin: "5px" }} to="/mentor">Mentor</NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
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
          <Route path="*">
            <NotFound></NotFound>
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
