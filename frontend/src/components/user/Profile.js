import React from "react";
import './Profile.css';
import Carditem from './UserCarditem';
import { List, ListItem, ListItemContent } from 'react-mdl';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.booktrip = this.booktrip.bind(this)
  }

  booktrip() {
    console.log('clicked')
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className="imgdiv">
        <div className="row" id="row">
          <div id="profile" className="col-sm-4 right" >
            <br></br>
            <br></br>
            <br></br>
            <div className='picContainer'>
              <img className="img1"
                src="https://media.npr.org/assets/img/2016/11/23/getty-480815249_wide-b7dfe122319c47631b74ce1a291f6e42df61f74b.jpg?s=1400"
                alt="userPic"
              />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='textContainer' >
              <div>
                <h4 className="text">Name</h4>
                <h6 className="text1">Full Name</h6>
              </div>
              <div>
                <h4 className="text">Email</h4>
                <h6 className="text1">User Mail</h6>
              </div>
              <div>
                <h4 className="text">Phone Number</h4>
                <h6 className="text1">User Number</h6>
              </div>
            </div>
          </div>
          <div className="col left" id="column">
            <div className='cards__container' id="cards__container1">
              <div className="cards__wrapper">
                <br></br>
                <br></br>
                <div className="textContainer">
                  <h4 className="text">Booked Trips</h4>
                </div>
                <br></br>
                <ul className="cards__items">
                  <Carditem
                    src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                    text="Explore Explore Explore"
                    label="Trip2"
                    path='/trip'
                  />
                  <Carditem
                    src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                    text="Explore Explore Explore"
                    label="Trip3"
                    path='/trip'
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Profile;
