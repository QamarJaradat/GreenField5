import React from 'react';
import '../../../src/App.css';
import './A-Style.css';
import Section from './Section';
import AboutUs from './AboutUs';
import Cards from './Cards';

function Home(props) {
    return (
        <>
            <Section />
            <AboutUs />
            <Cards lable1={props.hello} />
        </>
    )
}
export default Home;