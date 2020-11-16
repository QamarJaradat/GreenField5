import React from "react";
import './trips.css';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

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
                        <img className='tripimgs' src='https://i.imgur.com/9gbkGfI.jpeg' alt='Date'></img>
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



                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="..." alt="First slide"></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="..." alt="Second slide"></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="..." alt="Third slide"></img>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>


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
