import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
import Profile from './components/user/Profile';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trip from './components/trips/trips'
import Login from './components/user/login'
import Signup from './components/user/signup'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        islogin : true,
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)
} 
changeLogInStatus(){
  this.setState({
    islogin : !this.state.islogin
  })
}
  
  render(){
    const {islogin} = this.state
    if(islogin){
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route
              path='/sign-up'
              render={(props) => <Signup  toggleLogin={this.changeLogInStatus} />}
            />
  
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={Trip} />
          {/* <Route path="/sign-up" exact component={Signup} /> */}
          <Route path="/user" exact component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </>
    

  )
    }
    else{
      return(
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={Trip} />
          <Route
              path='/sign-up'
              render={(props) => <Login toggleLogin={this.changeLogInStatus} />}
            />
          <Route path="/user" exact component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </>
      )}
  }
}


export default App;
