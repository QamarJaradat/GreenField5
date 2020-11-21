import React from "react";
import './trips.css';
// import { Link } from 'react-router-dom';
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
        console.log(this.props.location.state.trip._id)
        console.log(this.props.location.state.userid)
        // this.props.location.getup()

        document.documentElement.scrollTop = 0;

    }


    booktrip() {
        console.log('clicked ')
        this.props.location.paymentCheck()

    }
    render() {
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
                <p align="center" style={{ 'marginTop': '60px' }}>See You Soon!!</p>
            </div >
        )
    }

}

export default Trip;
