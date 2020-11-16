import React, { Component } from 'react'
import './login.css';

class Login extends Component {  
    constructor(props){
        super(props);
        this.state = {
            islogin : false,
        }
        this.changeLogInStatus = this.changeLogInStatus.bind(this)
    } 
    changeLogInStatus(){
      this.setState({
        islogin : !this.state.islogin
      })
      console.log("hello darkness my old firend ")
    }         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    render() {
        return (
            <div className="test">

                <div className="row">

                    <div id="signin" className="col-sm-4 left form-group">
                        <form action="#">
                            <h1>do you have an acount please sign in here</h1>
                            <input type="email" className="form-control" name="email" placeholder="moon19 allah" />
                            <input type="password" className="form-control" name="password" placeholder="put the password or die" />
                            <small id="LoginupSwitch" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick = {this.props.toggleLogin}>have account? thanks mays</small>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}



export default Login;
