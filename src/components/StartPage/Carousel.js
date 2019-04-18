import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
    render() {
        return (
            <Carousel infiniteLoop={true} showThumbs={false} className='carousel'>
                <div>
                    <img src={require('../../../pictures/1.jpg')} alt="slide1"/>
                    <p className="legend">Узнай больше</p>
                </div>
                <div>
                    <img src={require('../../../pictures/2.jpg')} alt="slide2"/>
                    <p className="legend">Узнай больше</p>
                </div>
                <div>
                    <img src={require('../../../pictures/3.jpg')} alt="slide3"/>
                    <p className="legend">Узнай больше</p>
                </div>
                <div>
                    <img src={require('../../../pictures/4.jpg')} alt="slide4" />
                    <p className="legend">Узнай больше</p>
                </div>
            </Carousel>
        );
    }
}
export default Slider;
