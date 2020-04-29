import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import People from './components/People';
import Character from './components/Character';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/people' exact component={People} />
          <Route path='/people/:id' component={Character} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
