import React from 'react';
import './App.css';
import Navbarmenu from './Components/Navbar'
import Categories from './Components/Categories'
import Mobile from './Components/Mobile'
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'
import {Redirect, Route, Switch} from 'react-router-dom'
import Ad from './Container/Ad';
import Home from './Container/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbarmenu />
      <Categories />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/ad/:id" component={Ad}/>
      <Redirect to="/" />
      </Switch>
      <Mobile />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
