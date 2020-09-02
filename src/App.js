import React from 'react';
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// page routes
import  Home  from './home';
import  About  from './about';
import  Contact  from "./components/contact";
import  Attractions  from './components/attractions';
import  Addattractions   from './components/addAttraction';
import  singleAttraction from './components/singleAttraction';
import  Blog  from './blog';
import  NoMatch    from './noMatch';
import  Navbar  from "./components/navigationbar"
import  Jumbotron  from './components/jumbotron';
import  Footer from "./components/Footer"


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
            <Route path="/attractions" exact component={Attractions} />
            <Route path="/add" exact component={Addattractions} />
            <Route path="/blog" component={Blog} />
            <Route path="/attractions/:id" exact component={singleAttraction} />

            <Route component={NoMatch} />
          </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
    
  );
}
}

