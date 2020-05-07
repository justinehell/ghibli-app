import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Characters from './components/Characters';
import Films from './components/Films';
import Locations from './components/Locations';
import Species from './components/Species';
import Character from './components/Character';
import Film from './components/Film';
import Location from './components/Location';
import SpeciesDetail from './components/SpeciesDetail';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/people' exact component={Characters} />
          <Route path='/films' exact component={Films} />
          <Route path='/locations' exact component={Locations} />
          <Route path='/species' exact component={Species} />
          <Route path='/people/:id' component={Character} />
          <Route path='/films/:id' component={Film} />
          <Route path='/locations/:id' component={Location} />
          <Route path='/species/:id' component={SpeciesDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
