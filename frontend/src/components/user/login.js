import React, { Component } from 'react'
import './login.css';

class Login extends Component {
  render() {
    return (
    <div className="test">

      <div className="row">

        <div id="signin" className="col-sm-4 left form-group">
          <form action="#">
            <h1>do you have an acount please sign in here</h1>
            <input type="email" className="form-control" name="email" placeholder="moon19 allah"/>
            <input type="passowrd" className="form-control" name="password" placeholder="put the password or die"/>

          </form>
        </div>
        <div id="signup" class="col-sm-4 right">
          <form action="#">
            <h1>new to our website join us and signup here</h1>
            <input type="string" className="form-control" name="firstName" placeholder="First Name"/>
            <input type="string" className="form-control" name="lastName" placeholder="Last Name"/>
            <input type="email" className="form-control" name="email" placeholder="moon19 allah"/>
            <input type="passowrd" className="form-control" name="password" placeholder="put the password or die"/>
            <input type="passowrd" className="form-control" name="conformPassword" placeholder="do it again"/>
          </form>
        </div>
      </div>
    </div>
    )
  }
}



export default Login;
