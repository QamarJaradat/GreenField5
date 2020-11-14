import React from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trip from './components/trips'
import Home from './components/Home'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={Trip} />

        </Switch>
      </Router>
    </>

  );
}

export default App;
