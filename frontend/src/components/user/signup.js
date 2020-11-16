import React, { Component } from 'react'
import './login.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogin: false,
        }
        this.changeLogInStatus = this.changeLogInStatus.bind(this)
    }
    changeLogInStatus() {
        this.setState({
            islogin: !this.state.islogin
        })
    }
    render() {
        return (
            <div className="test">

                <div className="row">


                    <div id="signup" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <h1>new to our website </h1><h3>join us and signup here</h3>
                            <div>
                                <label>First Name</label>
                                <input type="string" className="form-control" name="firstName" placeholder="First Name" />
                            </div>
                            <div>
                                <label>Last Name</label>
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
                                <small id="emailHelp" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick={this.props.toggleLogin}>have account? Login.</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Signup;
