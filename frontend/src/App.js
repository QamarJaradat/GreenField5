import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
import $ from 'jquery'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trips from './components/Homepage/Cards'
import Login from './components/user/login'
import Trip from './components/trips/trips'
import Signup from './components/user/signup'
import Payment from './components/payment/payment'

import Profile from './components/user/Profile';
import Navbar2 from './components/Homepage/Navbar-login';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: true,
      hello: 'hello for reeal',
      isuser: false,
      tokenin:"",
      testtrips: []
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)
    this.getup = this.getup.bind(this)
    this.paymentCheck = this.paymentCheck.bind(this)
    this.getTrips = this.getTrips.bind(this)
    this.changeUserStatus = this.changeUserStatus.bind(this)

  }
  changeLogInStatus() {
    this.setState({
      islogin: !this.state.islogin,
      tokenin: ''
    })
  }
  changeUserStatus() {
    this.setState({
      isuser: !this.state.isuser,
      
    })
  }
  getTrips = () => {
    var alltrips = []
    $.ajax({
      type: "GET",
      url: "/gettrips",
      success: (res) => {
        for (var i in res) {
          console.log(res[i])
          alltrips.push(res[i])

        }
        console.log("my first ajax request yay" + alltrips)
        this.setState({
          testtrips: alltrips
        })
      },
      error: function (err) {
        console.error(err)
      }
    })
  }


  getup() {
    console.log('all the way from the app, Hi!', this.state.testtrips)
  }
  componentDidMount() {
    this.setState({
      tokenin: document.cookie
    })
    document.documentElement.scrollTop = 0;
    this.getTrips()

  }

  paymentCheck() {
    console.log('payment method')
  }
  render() {
    if (!this.state.tokenin === '') {
      console.log('hi')
    }
    const { islogin } = this.state
    let comp
    let nav
    if (islogin) {
      comp = <Route
        path='/sign-up'
        render={(props) => <Signup toggleLogin={this.changeLogInStatus} />}
      />

      
    }
    else {
      comp = <Route
        path='/sign-up'
        render={(props) => <Login toggleuser={this.changeUserStatus} toggleLogin={this.changeLogInStatus} hello='hello' />}
      />
    }
    if(this.state.tokenin){ nav = <Navbar2></Navbar2>}
    else{nav = <Navbar></Navbar>}
    return (
      <>
        <Router>
          {nav}
          <Switch>
            {comp}
            <Route
              path="/"
              exact render={(props) => <Home getup={this.getup} testtrips={this.state.testtrips} paymentCheck={this.paymentCheck} hello={this.state.hello} trip={this.state.thetrip} />}
            />
            <Route
              path="/trips"
              render={(props) => <Trips getup={this.getup} testtrips={this.state.testtrips} paymentCheck={this.paymentCheck} lable1={this.state.hello} trip={this.state.thetrip} />}
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
