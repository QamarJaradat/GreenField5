import React from 'react'
import './login.css';
import $ from 'jquery'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''


    }
    this.handelchange = this.handelchange.bind(this)
    this.LoginHandler = this.LoginHandler.bind(this)

  }
  LoginHandler() {
    var data = {
      userPass: this.state.password,
      userMail: this.state.email
    }
    $.ajax({
      type: "POST",
      url: "/login",
      data: data,
      success: function (res) {
        console.log("it's working")
        window.location.href = "/"
      },
      error: function (error) {
        if (error.status === 404) {
          alert('user not existed')
          console.log(error.responseText)
        }
        if (error.status === 400) {
          alert('wrong password')
        }

      }
    })


  }
  handelchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="test">

        <div className="row">

          <div id="signin" className="col-sm-4 left form-group">
            <form action="#">
              <h3 id="signuptitle">Do you have an account</h3>
              <h3>sign in here</h3>
              <div>
                <label>Your Email</label>
                <input type="email" className="form-control inputhover" name="email" placeholder="email" onChange={this.handelchange} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" className="form-control inputhover" name="password" onChange={this.handelchange} placeholder="password" />
              </div>
              <div style={{ "marginTop": '12px' }}>
                <input type='button' value='Signin' onClick={this.LoginHandler} className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                <small id="LoginupSwitch" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick={this.props.toggleLogin}>Signup here</small>
              </div>
            </form>
          </div>

        </div>
      </div>
    )
  }
}


export default Login;
