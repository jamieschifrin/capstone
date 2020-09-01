import React from 'react';
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// page routes
import  Home  from './home';
import  About  from './about';
import  Contact  from './contact';
import  Attractions  from './attractions';
import  Addattractions   from './addAttractions';
import  Blog  from './blog';
import  NoMatch    from './noMatch';
import  Navbar  from "./components/navigationbar"
import  Jumbotron  from './components/jumbotron';
import Footer from "./components/Footer"


export default class App extends Component {
  render() {
    return(
    <React.Fragment>
      
      <Router>
       <Navbar />
       {/* <Jumbotron /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Attractions" component={Attractions} />
            <Route path="/addAttractions" component={Addattractions} />
            <Route path="/blog" component={Blog} />
            <Route component={NoMatch} />
          </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
    
  );
}
}

