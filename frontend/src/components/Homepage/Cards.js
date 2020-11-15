import React from 'react';
import Carditem from './Carditem';
import './A-Style.css'

function Cards() {
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
                            path='/trips'
                        />
                        <Carditem
                            src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                            text="Explore Explore Explore"
                            label="Trip2"
                            path='/trips'
                        />
                        <Carditem
                            src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                            text="Explore Explore Explore"
                            label="Trip3"
                            path='/trips'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                            text="Explore Explore Explore"
                            label="Trip4"
                            path='/trips'
                        />
                        <Carditem
                            src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                            text="Explore Explore Explore"
                            label="Trip5"
                            path='/trips'
                        />
                        <Carditem
                            src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                            text="Explore Explore Explore"
                            label="Trip6"
                            path='/trips'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
