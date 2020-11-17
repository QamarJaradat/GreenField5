import React from "react";
import './trips.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const slideImages = [
    'https://i.pinimg.com/originals/8c/43/82/8c438214125d1388a3568e2a4c7eb6cc.jpg',
    'https://en.meming.world/images/en/thumb/b/b9/Cursed_Cat.jpg/300px-Cursed_Cat.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/957465516828218208/FBBD4788D4B32A70BEAB86FD49074E1ACACB5FFB/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    'data:image/jpeg;base64,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'
];
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
const properties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    arrows: true
};

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
    }

    booktrip() {
        console.log('clicked ', this.props)
    }
    render() {
        return (
            <div >
                <div className="d-flex flex-wrap justify-content-around" style={{ 'textAlign': 'center', 'marginTop': '20px' }}>
                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/2945/2945620.svg' alt='Trip Map'></img>
                        <p>trip line </p>
                    </div>

                    <div>
                        <img className='imgs' src='https://www.flaticon.com/svg/static/icons/svg/3068/3068706.svg' alt='Night'></img>
                        <p>number of trip nigths</p>
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
                {/* trip info my days */}
                <br></br>
                <div className='d-flex flex-wrap justify-content-around'>

                    <div className='inlinediv' style={{ 'width': '55%', 'height': '200px' }}>
                        <div style={{ 'width': '99%', 'height': "30px", 'backgroundColor': " rgb(82, 10, 41)", 'color': 'white' }}>
                            <h5 style={{ 'marginLeft': '15px' }}>Day1</h5>
                        </div>

                        <p className='pfont' style={{ 'marginTop': '8px' }}>we will start our trip be visiting The Terraces of the Baháʼí Faith
                        These gardens extend over Mount Carmel. The harbor, this garden in the Baha'i World Center,
                        includes a building with a golden dome, and it is the duty of a Baha'i missionary who was killed
                        in 1850, and his remains were transferred to Haifa.
                        You will enjoy an Awesome view of the city from the top of the hill.</p>

                    </div>
                    <div className='inlinediv' style={{ 'width': '44%', 'height': '200px' }}>
                        <Slide  {...properties}>
                            {slideImages.map((item, i) => { return <img className='tripimgs' src={item} key={i} alt='Date'></img> })}
                        </Slide>
                    </div>
                </div>

                <div className='d-flex flex-wrap justify-content-around'>

                    <div className='inlinediv' style={{ 'width': '55%', 'height': '200px' }}>
                        <div style={{ 'width': '99%', 'height': "30px", 'backgroundColor': "#ad679d", 'color': 'white' }}>
                            <h5 style={{ 'marginLeft': '15px' }}>Day1</h5>
                        </div>

                        <p className='pfont' style={{ 'marginTop': '8px' }}>we will start our trip be visiting The Terraces of the Baháʼí Faith
                        These gardens extend over Mount Carmel. The harbor, this garden in the Baha'i World Center,
                        includes a building with a golden dome, and it is the duty of a Baha'i missionary who was killed
                        in 1850, and his remains were transferred to Haifa.
                        You will enjoy an Awesome view of the city from the top of the hill.</p>

                    </div>
                    <div className='inlinediv' style={{ 'width': '44%', 'height': '200px' }}>
                        <Slide  {...properties}>
                            {slideImages.map((item, i) => { return <img className='tripimgs' src={item} key={i} alt='Date'></img> })}
                        </Slide>
                    </div>
                </div>





                <div>
                    <p align="right" style={{ 'marginRight': '12px' }}>
                        <input className='btn btn-primary' type="button" value="Book this trip" onClick={this.booktrip} />
                    </p>
                </div>
            </div>
        )
    }

}

export default Trip;
