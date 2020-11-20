import React from "react";
import './Profile.css';
import Carditem from './UserCarditem';
import $ from 'jquery'
// import { List, ListItem, ListItemContent } from 'react-mdl';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      usename: '',
      useremail: '',
      mytrips: '',
      profileimg: 'https://i.imgur.com/ejGOOnV.jpg'
    }
    this.booktrip = this.booktrip.bind(this)
  }

  booktrip() {
    console.log('clicked')
  }

  componentDidMount() {
    console.log(this.props.userid)
    if (this.props.userid.userimage) {
      this.setState({
        profileimg: this.props.userid.userimage
      })
    }
    var array = []
    if (this.props.userid.trips) {
      // console.log(this.props.userid.trips)
      var mytrips = this.props.userid.trips
      for (var i in mytrips) {
        $.ajax({
          type: "POST",
          url: "/getmytrips",
          data: { id: mytrips[i] },
          success: (res) => {
            console.log(res)
            array.push(res)
            this.setState({
              mytrips: array
            })
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    }
  }
  componentWillMount() {
    document.documentElement.scrollTop = 0;
    // $.get('/getuserinfo', { data: this.props.userid })

  }
  render() {
    let cards
    if (this.state.mytrips) {
      cards = <div> <ul className="cards__items">
        {this.state.mytrips.slice(0, 3).map((trip) =>
          <Carditem
            src={trip.image[0][0]}
            label={trip.name}
            text={trip.explore}
            path='/mytrip'
            trip={trip}
            paymentCheck={this.props.paymentCheck}
          />)}</ul>
        <ul className="cards__items">
          {this.state.mytrips.slice(3, 5).map((trip) =>
            <Carditem
              src={trip.image[0][0]}
              label={trip.name}
              text={trip.explore}
              path='/mytrip'
              trip={trip}
              paymentCheck={this.props.paymentCheck}
            />)}</ul>
      </div>

    }
    else {
      cards = <div>No Booked Trips Yet</div>
    }
    return (
      <div className="imgdiv">
        <div className="row" id="row">
          <div id="profile" className="col-sm-4 right" >
            <br></br>
            <br></br>
            <br></br>
            <div className='picContainer'>
              <img className="img1"
                src={this.state.profileimg}
                alt="userPic"
              />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='textContainer' >
              <div>
                <h4 className="text">Name</h4>
                <h6 className="text1">{this.props.userid.userName}</h6>
              </div>
              <div>
                <h4 className="text">Email</h4>
                <h6 className="text1">{this.props.userid.userMail}</h6>
              </div>
              <div>
                <h4 className="text">Phone Number</h4>
                <h6 className="text1">{this.props.userid.userNum}</h6>
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
                {cards}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Profile;
