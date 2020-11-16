import React from 'react'
import './login.css';

class Login extends React.Component {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    render() {
        return (
            <div className="test">

                <div className="row">

                    <div id="signin" className="col-sm-4 left form-group">
                        <form action="#">
                            <h3 id = "signuptitle">Do you have an account</h3>
                            <h3>sign in here</h3>
                            <input type="email" className="form-control inputhover"  name="email" placeholder="email" />
                            <input type="password" className="form-control inputhover" name="password" placeholder="password" />
                            <input type='button' value='Signin!' className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                            <small id="LoginupSwitch" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick = {this.props.toggleLogin}>Signup here</small>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}




export default Login;
