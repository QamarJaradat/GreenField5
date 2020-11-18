import React from "react";
import './Profile.css';
import Carditem from '../Homepage/Carditem';
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
                      <h6 className="text">Full Name</h6>
                 </div>
                 <div>
                      <h4 className="text">Email</h4>
                      <h6 className="text">User Mail</h6>
                 </div>
                 <div>
                      <h4 className="text">Phone Number</h4>
                      <h6 className="text">User Number</h6>
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
      // <div className="hole" >
      //   <div className='all' style={{ 'marginLeft': '200px' }}>
      //     <div className="d-flex flex-wrap justify-content-around" style={{ 'textAlign': 'center', 'marginTop': '10px', 'margin-right': ' 200px' }}>
      //     </div>

      //     <br></br>
      //     <div className='d-flex flex-wrap justify-content-around'>

      //       <div className='inlinediv' style={{ 'width': '55%', 'height': '200px' }}>

      //         <h2>Paul Hanna</h2>
      //         <img className="img1"
      //           src="https://media.npr.org/assets/img/2016/11/23/getty-480815249_wide-b7dfe122319c47631b74ce1a291f6e42df61f74b.jpg?s=1400"
      //           alt="avatar"
      //           style={{ height: '160px' }}
      //         />




      //       </div>
      //       <div>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //       </div>
      //     </div>

      //     <div className='d-flex flex-wrap justify-content-around'>

      //       <div className='inlinediv' style={{ 'width': '55%', 'height': '200px' }}>


      //         <div className="contact-list">
      //           <List>
      //             <ListItem>
      //               <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
      //                 <i className="fa fa-phone-square" aria-hidden="true" />
      //               (123) 456-7890
      //             </ListItemContent>
      //             </ListItem>

      //             <ListItem>
      //               <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
      //                 <i className="fa fa-fax" aria-hidden="true" />
      //               (123) 456-7890
      //             </ListItemContent>
      //             </ListItem>

      //             <ListItem>
      //               <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
      //                 <i className="fa fa-envelope" aria-hidden="true" />
      //               someone@example.com
      //             </ListItemContent>
      //             </ListItem>

      //             <ListItem>
      //               <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
      //                 <i className="fa fa-skype" aria-hidden="true" />
      //               MySkypeID
      //             </ListItemContent>
      //             </ListItem>


      //           </List>
      //         </div>

      //       </div>
      //       <div className='inlinediv'>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //         <ul style={{ fontSize: '30px', fontFamily: 'Anton' }}>Tour name : 20.10.2020</ul>
      //       </div>
      //     </div>






      //   </div>
      // </div>
    )
  }

}

export default Profile;
