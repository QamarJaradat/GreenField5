import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trip from './components/trips/trips'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={Trip} />

        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
