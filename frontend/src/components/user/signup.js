import React, { Component } from 'react'
import './login.css';

class Signup extends Component {
    render() {
        return (
            <div className="test">

                <div className="row">


          <div id="signup" className="col-sm-4 right" >
            <form action="#" className='form1' >
              <h3 id = "signintitle">New to our website join us and signup here</h3>
              <div>
                <label>First Name</label>
                <input type="string" className="form-control inputhover" name="firstName" placeholder="First Name" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="string" className="form-control inputhover" name="lastName" placeholder="Last Name" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" className="form-control inputhover" name="email" placeholder="email" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" className="form-control inputhover" name="password" placeholder="password" />
              </div>
              <div>
                <lable>Confirm Password</lable>
                <input type="password" className="form-control inputhover" name="conformPassword" placeholder="confirm password" />
              </div>
              <div style={{ "marginTop": '12px' }}>
                <input type='button' value='Sign Up!' className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                <small id="LoginupSwitch" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick = {this.props.toggleLogin}>have account? Login.</small>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}



export default Signup;
