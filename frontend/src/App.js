import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
import Profile from './components/user/Profile';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trips from './components/Homepage/Cards'
import Login from './components/user/login'
import Trip from './components/trips/trips'
// import Signup from './components/user/signup'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hello: 9

    }
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/trips" exact component={Trips} />
            {/* <Route path="/sign-up" exact component={Login} /> */}
            <Route path="/user" exact component={Profile} />
            <Route path="/trip" exact component={Trip} />
            <Route
              path='/sign-up'
              render={(props) => <Login hello={this.state.hello} />}
            />
          </Switch>
          <Footer />
        </Router>
      </>

    )
  }
}


export default App;
