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
        console.log(this.props.paymentCheck)
        return (
            <div className='cards'>
                <h1>Check out our Trips</h1>
                <div className='cards__container'>
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {/* EDIT HERE */}
                            <Carditem
                                src={this.props.trip[0].image[0][0]}
                                text={this.props.trip[0].explor}
                                label={this.props.trip[0].name}
                                hello={this.props.lable1}
                                path='/trip'
                                getup={this.props.getup}
                                trip={this.props.trip[0]}
                                // getup={this.props.getup}
                                paymentCheck={this.props.paymentCheck}

                            />

                            <Carditem
                                src={this.props.trip[1].image[0][0]}
                                text={this.props.trip[1].explor}
                                label={this.props.trip[1].name}
                                hello={this.props.lable1}
                                path='/trip'
                                getup={this.props.getup}
                                trip={this.props.trip[1]}
                                paymentCheck={this.props.paymentCheck}
                            // getup={this.props.getup}
                            />
                            <Carditem
                                src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                                text="Explore Explore Explore"
                                label="Trip3"
                                path='/trip'
                            />
                        </ul>
                        <ul className="cards__items">
                            <Carditem
                                src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                                text="Explore Explore Explore"
                                label="Trip4"
                                path='/trip'
                            />
                            <Carditem
                                src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                                text="Explore Explore Explore"
                                label="Trip5"
                                path='/trip'
                            />
                            <Carditem
                                src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                                text="Explore Explore Explore"
                                label="Trip6"
                                path='/trip'
                                hello='relle hello'


                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
