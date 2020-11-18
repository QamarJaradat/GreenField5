import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
// import $ from 'jquery'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trips from './components/Homepage/Cards'
import Login from './components/user/login'
import Trip from './components/trips/trips'
import Signup from './components/user/signup'
import Payment from './components/payment/payment'
import Profile from './components/user/Profile';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: true,
      hello: 'hello for reeal'
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)
    this.getup = this.getup.bind(this)

  }
  changeLogInStatus() {
    this.setState({
      islogin: !this.state.islogin,
      tokenin: ''
    })
  }

  getup() {
    console.log('all the way from the app, Hi!')
  }
  componentDidMount() {
    this.setState({
      tokenin: document.cookie
    })
    document.documentElement.scrollTop = 0;

  }
  render() {
    if (!this.state.tokenin === '') {
      console.log('hi')
    }
    const { islogin } = this.state
    let comp
    if (islogin) {
      comp = <Route
        path='/sign-up'
        render={(props) => <Signup toggleLogin={this.changeLogInStatus} />}
      />
    }
    else {
      comp = <Route
        path='/sign-up'
        render={(props) => <Login toggleLogin={this.changeLogInStatus} hello='hello' />}
      />
    }
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            {comp}
            <Route
              path="/"
              exact render={(props) => <Home getup={this.getup} hello={this.state.hello} />}
            />
            <Route
              path="/trips"
              render={(props) => <Trips getup={this.getup} lable1={this.state.hello} />}
            />
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/trips" exact component={Trips} /> */}
            <Route path="/sign-up" exact component={Signup} />
            <Route path="/user" exact component={Profile} />
            <Route path="/trip" exact component={Trip} />

          </Switch>
          <Footer />
        </Router>
      </>


    )


  }
}


export default App;
