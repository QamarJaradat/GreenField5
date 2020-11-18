import React from 'react';
import '../../../src/App.css';
import { Button } from './BookButton';
import './A-Style.css';

function Section() {
    return (
        <div className='section-container'>
            {/* <video src="../../public/videos/video-2.mp4" autoPlay loop mute /> */}
            <h1>EXPLORE PALESTINE</h1>
            <p>THE WONDERFUL HOLY LAND</p>
            <div className='section-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Book a Trip
                    </Button>
            </div>
        </div>
    )
}

export default Section
