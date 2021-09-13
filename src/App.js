import React, {  useState } from 'react';
import { HashRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import Details from './detailsCountry';
import Footer from './footer';
import Header from './header';
import Home from './home';
import './loader.css';


function App() {

  const [region, setRegion] = useState('eu');const [mode, setMode] = useState('select');

return (
  <Router>
    <Header onRegionSelect={e=>{setRegion(e.value.region); setMode(e.type)}}/>
    <Switch>
      <Route path='/' exact>
        <Home mode={mode} Sregion={region}>
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
