import React, { Component } from 'react';
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
            phoneNo: '',
            checked: true,
            newsCheck: false
        }
        this.LoginHandler = this.LoginHandler.bind(this)
        this.handelchange = this.handelchange.bind(this)
        this.newsLetter = this.newsLetter.bind(this)
    }
    newsLetter() {
        this.setState({
            newsCheck: !this.state.newsCheck
        })
        //alert('Thank you for Subscribing to our News Letter')
        if (!this.state.newsCheck) { document.getElementById("subscribed").innerHTML = "<div class='alert alert-danger' role='alert'>Thank you for Subscribing to our News Letter</div>" }
        else { document.getElementById("subscribed").innerHTML = "<div></div>" }
    }
    handelchange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    LoginHandler() {

        if (this.state.password === this.state.conformPassword) {
            var username = this.state.firstName + " " + this.state.lastName
            var data = {
                userName: username, userPass: this.state.password,
                userMail: this.state.email, userNum: this.state.phoneNo,
                userfirstName: this.state.firstName
            }
            $.ajax({
                type: "POST",
                url: "/signup",
                data: data,
                success: function (res) {
                    console.log("it's working")
                    window.location.href = "/"

                },
                error: function (error) {
                    if (error.status === 451) {
                        console.log('451')

                        document.getElementById("emptyname").innerHTML = "<div class='alert alert-danger' role='alert'> You have to enter your name</div>"

                    }

                    if (error.status === 411) {
                        //alert('wrong password')
                        document.getElementById("emptyusermail").innerHTML = "<div class='alert alert-danger' role='alert'> You have to enter your email</div>"

                    }

                    if (error.status === 421) {

                        document.getElementById("emptypass").innerHTML = "<div class='alert alert-danger' role='alert'> You have to enter your Pass</div>"

                    }



                    if (error.status === 406) {
                        //alert('already created user with this Email')
                        document.getElementById("userCreated").innerHTML = "<div class='alert alert-danger' role='alert'> This email has been used</div>"

                        console.log(error.responseText)
                    }
                }
            })

        }
        else {
            //alert("Password not matche");
            document.getElementById("matchPass").innerHTML = "<div class='alert alert-danger' role='alert'> passwords doesn't match</div>"

        }
    }
    render() {

        return (
            <div className="test">

                <div className="row">


                    <div id="signup" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <h4 id="signintitle" style={{ "text-align": "center" }}>New To Our Website</h4>
                            <h4 id="signintitle" style={{ "text-align": "center" }}>Join Us and Signup Here</h4>
                            <div>
                                <label>First Name</label>
                                <input type="string" className="form-control inputhover" onChange={this.handelchange} name="firstName" placeholder="First Name" />
                                <small id="emptyname"> </small>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="string" className="form-control inputhover" onChange={this.handelchange} name="lastName" placeholder="Last Name" />
                            </div>

                            <div>
                                <label>Email</label>
                                <input type="email" className="form-control inputhover" onChange={this.handelchange} name="email" placeholder="Email" />
                                <small id="userCreated"> </small>
                                <small id="emptyusermail"> </small>
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="string" className="form-control inputhover" onChange={this.handelchange} name='phoneNo' placeholder="Phone Number" />
                            </div>
                            <div>
                                <label>Password</label>

                                <input type="password" className="form-control inputhover" onChange={this.handelchange} name="password" placeholder="Password" />
                                <small id='emptypass'></small>
                            </div>
                            <div>
                                <lable>Confirm Password</lable>
                                <input type="password" className="form-control inputhover" onChange={this.handelchange} name="conformPassword" placeholder="Confirm Password" />
                                <small id="matchPass"></small>
                            </div>
                            <div style={{ "marginTop": '4px', "margin-left": "10%", "margin-right": "10%" }}>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" value={this.state.newsCheck} onClick={() => this.newsLetter()}></input>
                                <div style={{ "marginTop": '4px' }}>


                                    <label class="form-check-label" for="exampleCheck1">Subscribe To Our News Letter</label>
                                    <small id="subscribed"></small>
                                    <br></br>

                                </div>

                            </div>
                            <div>
                                <input type='button' value='Sign Up!' onClick={this.LoginHandler} className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '4px' }}></input>

                                <small id="LoginupSwitch" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick={this.props.toggleLogin}>have account? Login.</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Signup;
