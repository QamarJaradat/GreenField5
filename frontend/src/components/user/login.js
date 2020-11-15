import React from 'react'
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="test">

        <div className="row">


          <div id="signup" class="col-sm-4 right" >
            <form action="#" className='form1' >
              <h4>new to our website join us and signup here {this.props.hello}</h4>
              <div>
                <label>First Name</label>
                <input type="string" className="form-control" name="firstName" placeholder="First Name" />
              </div>
              <div>
                <label>last Name</label>
                <input type="string" className="form-control" name="lastName" placeholder="Last Name" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" className="form-control" name="email" placeholder="moon19 allah" />
              </div>
              <div>
                <label>Password</label>
                <input type="passowrd" className="form-control" name="password" placeholder="put the password or die" />
              </div>
              <div>
                <lable>Confirm Password</lable>
                <input type="passowrd" className="form-control" name="conformPassword" placeholder="do it again" />
              </div>
              <div style={{ "marginTop": '12px' }}>
                <input type='button' value='Sign Up!' className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                <small id="emailHelp" class="form-text text-muted" style={{ "display": 'inline-block' }}>have account? Login.</small>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}



export default Login;
