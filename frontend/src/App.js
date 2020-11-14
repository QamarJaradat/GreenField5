import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'

function App() {

  //   constructor(props) {
  //     super(props);
  //     this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //     fetch("http://localhost:4000/signin")
  //         .then(res => res.json())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
