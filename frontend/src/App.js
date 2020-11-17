import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
import Profile from './components/user/Profile';
// import $ from 'jquery'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trips from './components/Homepage/Cards'
import Login from './components/user/login'
import Trip from './components/trips/trips'
import Signup from './components/user/signup'
import Payment from './components/payment/payment'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: true,
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)

  }
  changeLogInStatus() {
    this.setState({
      islogin: !this.state.islogin,
      tokenin: ''
    })
    document.documentElement.scrollTop = 0;
  }

  componentDidMount() {
    this.setState({
      tokenin: document.cookie
    })

    //   $.ajax({
    //     type: "get",
    //     url: "/check",
    //     success: function (res) {
    //       console.log("it's working")
    //       this.setState({
    //         tokenin: res.cookies
    //       })
    //     },
    //     error: function (error) {

    //       console.log(error.status)

    //     }
    //   })
  }
  render() {
    if (!this.state.tokenin === '') {
      console.log('hi')
    }
    const { islogin } = this.state
    if (islogin) {
      return (
        <>
          <Router>
            <Navbar />
            <Switch>
              <Route
                path='/sign-up'
                render={(props) => <Signup toggleLogin={this.changeLogInStatus} />}
              />

              <Route path="/" exact component={Home} />
              <Route path="/trips" exact component={Trips} />
              {/* <Route path="/sign-up" exact component={Signup} /> */}
              <Route path="/user" exact component={Payment} />
              <Route path="/trip" exact component={Trip} />

            </Switch>
            <Footer />
          </Router>
        </>


      )
    }
    else {
      return (
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
              <Route path="/trip" exact component={Trip} />

            </Switch>
            <Footer />
          </Router>
        </>
      )
    }
  }
}


export default App;
