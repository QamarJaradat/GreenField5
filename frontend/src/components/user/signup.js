import React, { Component } from 'react'
import './login.css';

class signup extends Component {
    render() {
        return (
            <div className="test">

                <div className="row">

                    <div id="signin" className="col-sm-4 left form-group">
                        <form action="#">
                            <h1>do you have an acount please sign in here</h1>
                            <input type="email" className="form-control" name="email" placeholder="moon19 allah" />
                            <input type="passowrd" className="form-control" name="password" placeholder="put the password or die" />

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}



export default signup;
