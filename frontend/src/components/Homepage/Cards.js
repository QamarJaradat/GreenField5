import React from 'react';
import Carditem from './Carditem';
import './A-Style.css'
// import $ from 'jquery';


class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: 19
        }
    }

    componentDidMount() {
        // $.ajax({
        //     type: "POST",
        //     url: "/trips",
        //     data: { name: this.state.username, card: this.state.userccard },
        //     success: function (res) {
        //         console.log(res)
        //     },
        //     error: function (error) {
        //         console.error('Failed to fetch Items', error);
        //     }
        // })
    }



    render() {
        return (
            <div className='cards'>
                <h1>Check out our Trips</h1>
                <div className='cards__container'>
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {/* EDIT HERE */}
                            <Carditem
                                src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                                text="Explore Explore Explore"
                                label="Trip1"
                                path='/trip'
                            />
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
                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
