import React, {  useState } from 'react';
import { HashRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import Details from './detailsCountry';
import Footer from './footer';
import Header from './header';
import Home from './home';
import './loader.css';

function App() {

return (
  <Router>
    <Header/>
    <Switch>
      <Route path='/' exact>
        <Home>
          </Home> 
      </Route>
      <Route path="/country/:name">
        <Details></Details>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
)

}

export default App;
