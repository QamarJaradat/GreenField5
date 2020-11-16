import React, { Component } from 'react'
import './login.css';
import $ from 'jquery'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            conformPassword: '',
            phoneNo: ''


        }
        this.LoginHandler = this.LoginHandler.bind(this)
        this.handelchange = this.handelchange.bind(this)
    }
    handelchange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    LoginHandler() {

        if (this.state.password === this.state.conformPassword) {
            $.get('/test', function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            })
        }
    }
    render() {
        return (
            <div className="test">

                <div className="row">


                    <div id="signup" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <h2>new to our website </h2><h3>join us and signup here</h3>
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
                                <label>Phone Number</label>
                                <input type="email" className="form-control" name="phoneNo" placeholder="Your phone Number" />
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
                                <input type='button' onClick={this.LoginHandler} value='Sign Up!' className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
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
