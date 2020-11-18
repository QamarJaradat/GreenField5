import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const properties = {
    duration: 9000000000000,
    transitionDuration: 400,
    infinite: true,
    indicators: false,
    arrows: true
};
class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            slideImages: [
                "https://images.alwatanvoice.com/news/large/9999007416.jpg",
                "https://nn.ps/media/uploads/weblog/2018/06/21/98d546cf-7196-48f1-8285-a08c6680089a.jpg",
                "https://www.alaraby.co.uk/sites/default/files/media/images/A895BC6A-2A4A-48FD-8574-185090B1AC9C.jpg"
            ]
        }
    }
    componentDidMount() {

    }

    render() {
        return (

            <div >
                <div className='d-flex flex-wrap justify-content-around' >

                    <div className='inlinediv' style={{ 'width': '55%', 'height': '200px' }}>
                        <div style={{ "borderRadius": "16px 0 16px 0", 'width': '99%', 'height': "35px", 'backgroundColor': " rgb(82, 10, 41)", 'color': 'white', 'paddingTop': '5px' }}>
                            <h5 style={{ 'marginLeft': '15px' }}>Day {this.props.dayno}</h5>
                        </div>

                        <p className='pfont' style={{ 'marginTop': '8px' }}> {this.props.dayinfo}
                        </p>
                    </div>
                    <div className='inlinediv' style={{ 'width': '44%' }}>
                        <div >
                            <Slide  {...properties}>
                                {this.props.imgs.map((item, i) => { return <img className='tripimgs' src={item} key={i} alt='Date'></img> })}
                            </Slide>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Day