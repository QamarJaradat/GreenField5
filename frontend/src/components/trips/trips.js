import React from "react";
import './trips.css';
import { Link } from 'react-router-dom';
import Day from './days'
class Trip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            thetrip: {
                image: [],
                discription: {},
                _id: '',
            },
            booked: false,
            whobookit: 0,
            maxnoPerTrip: 0

        }
        this.booktrip = this.booktrip.bind(this)
    }

    componentDidMount() {
        this.setState({
            thetrip: this.props.location.state.trip,
            whobookit: this.props.location.state.trip.idOfTourist.length,
            maxnoPerTrip: this.props.location.state.trip.maximumNumPerTrip
        })
        // const { trip } = this.props.match.paras
        // const { fromNotificaions } = this.props.location.state
        // console.log("  ", fromNotificaions)
        console.log(this.props.location.state.trip.idOfTourist.length)
        console.log(this.props.location.state.userid)
        // this.props.location.getup()

        document.documentElement.scrollTop = 0;

    }


    booktrip() {
        console.log('clicked ')
        this.props.location.paymentCheck()

    }
    render() {
        var today = new Date();

        let statedata = {}
        let pathname = '/trip'
        if (this.props.location.state.userid && this.props.location.state.trip) {
            var ex = new Date(this.props.location.state.trip.deadLine)
            // console.log(this.props.location.state.userid, "userinfo")
            if (!this.props.location.state.trip.idOfTourist.includes(this.props.location.state.userid) && (this.state.maxnoPerTrip !== this.state.whobookit) && (ex.getTime() >= today.getTime())) {

                pathname = '/payment'

                statedata = {
                    tripid: this.props.location.state.trip._id,
                    userid: this.props.location.state.userid
                }
            }
        }


        return (
            <div >
                <div className="d-flex flex-wrap justify-content-around" style={{ 'textAlign': 'center', 'marginTop': '20px' }}>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/2945/2945620.svg' alt='Trip Map'></img>
                        <p>{this.state.thetrip.name}</p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/3068/3068706.svg' alt='Night'></img>
                        <p>{this.state.thetrip.tripType}</p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/1071/1071526.svg' alt='People'></img>
                        <p>{this.state.thetrip.maximumNumPerTrip} person -- <small> available {this.state.maxnoPerTrip - this.state.whobookit} seat</small></p>

                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/2635/2635433.svg' alt='Price'></img>
                        <p>{this.state.thetrip.price}</p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/3467/3467983.svg' alt='Date'></img>
                        <p>{new Date(this.state.thetrip.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/3409/3409565.svg' alt='tripGuide'></img>
                        <p>{this.state.thetrip.tripGuide}</p>
                    </div>
                </div>
                <br></br>
                <div>
                    {Object.keys(this.state.thetrip.discription).map((value) => {
                        let props = {
                            key: value,
                            dayno: value,
                            dayinfo: this.state.thetrip.discription[value],
                            imgs: this.state.thetrip.image[parseInt(value) - 1]

                        }
                        return (<div><Day {...props}></Day>
                            <br></br></div>)
                    }

                    )}
                </div>


                <Link to={{
                    pathname: pathname,
                    state: statedata,
                    // paymentCheck: this.props.paymentCheck
                }}   >
                    <div style={{ 'display': 'block' }}>
                        <p align="center" style={{ 'marginTop': '60px' }}>
                            <input className='btn btn-dark' type="button" value="Book this trip"
                                onClick={() => {
                                    console.log(this.props.location.state.userid)
                                    if (!this.props.location.state.userid) {
                                        console.log(`you can't book the trip log in first`)
                                        document.getElementById("nobook").innerHTML = "<div class='alert alert-secondary' role='alert'><strong>Sign Up To Book The Trip</strong></div>"

                                    }


                                    if (this.props.location.state.trip.idOfTourist.includes(this.props.location.state.userid))
                                        document.getElementById("nobook").innerHTML = "<div class='alert alert-secondary' role='alert'><strong>You had already book this trip!</strong></div>"

                                    if (this.state.maxnoPerTrip === this.state.whobookit) {
                                        document.getElementById("nobook").innerHTML = "<div class='alert alert-secondary' role='alert'><strong>No More seats, check other trips</strong></div>"
                                    } if (ex.getTime() < today.getTime()) {
                                        document.getElementById("nobook").innerHTML = "<div class='alert alert-secondary' role='alert'><strong>dead line ended</strong></div>"
                                    }
                                    console.log('pay pay')
                                }} />
                        </p>
                    </div></Link>
                <br></br>
                <div className="bookx">
                    <small id="nobook"></small>
                </div>
            </div >
        )
    }

}

export default Trip;
