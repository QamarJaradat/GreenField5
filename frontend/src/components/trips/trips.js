import React from "react";
import './trips.css';
import Day from './days'
class Trip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.booktrip = this.booktrip.bind(this)
    }

    componentDidMount() {
        // const { trip } = this.props.match.paras
        // const { fromNotificaions } = this.props.location.state
        // console.log("  ", fromNotificaions)
        console.log(this.props)
        this.props.location.getup()

        document.documentElement.scrollTop = 0;

    }

    booktrip() {
        console.log('clicked ', this.props)
    }
    render() {
        // console.log(this.props.location)
        return (
            <div >
                <div className="d-flex flex-wrap justify-content-around" style={{ 'textAlign': 'center', 'marginTop': '20px' }}>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/2945/2945620.svg' alt='Trip Map'></img>
                        <p>trip line </p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/3068/3068706.svg' alt='Night'></img>
                        <p>number of trip nigths </p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/1071/1071526.svg' alt='People'></img>
                        <p>max number of people </p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/2635/2635433.svg' alt='Price'></img>
                        <p>Price</p>
                    </div>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/3467/3467983.svg' alt='Date'></img>
                        <p>trip Date</p>
                    </div>
                </div>
                <br></br>
                <div>
                    {/* {this.props.trip.map(day => <Day dayinfo={this.props.dayifo}></Day>)} */}
                    <Day dayinfo={this.props.dayifo}></Day>

                </div>

                <div style={{ 'display': 'block' }}>
                    <p align="center" style={{ 'marginTop': '60px' }}>
                        <input className='btn btn-dark' type="button" value="Book this trip" onClick={this.booktrip} />
                    </p>
                </div>
            </div>
        )
    }

}

export default Trip;
