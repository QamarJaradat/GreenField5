import React from 'react';
import Carditem from './Carditem';
import './A-Style.css'

// import $ from 'jquery';


class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: "hello"
        }
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    render() {
        // console.log(this.props.testtrips)
        return (
            <div className='cards'>
                <h1>New Featured Trips</h1>
                <div className='cards__container'>
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {/* EDIT HERE */}
                            {this.props.testtrips.slice(0, 3).map((trip) =>
                                <Carditem
                                    src={trip.image[0][0]}
                                    // text={this.props.trip[0].explor}
                                    label={trip.name}
                                    text={trip.explore}
                                    // hello={this.props.lable1}
                                    path='/trip'
                                    // getup={this.props.getup}
                                    trip={trip}
                                    paymentCheck={this.props.paymentCheck}
                                    userid={this.props.userid}

                                />)}

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
