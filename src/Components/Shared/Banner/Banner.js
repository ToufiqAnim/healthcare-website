import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../image/image1.jpg'

const Banner = () => {
    return (
        <div >
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                    style={{height:'800px'}}
                    className="d-block w-100"
                     src={image1} alt="" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'800px'}}
                    className="d-block w-100"
                    src={image1} alt="" />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                </Carousel>
        </div>
    );
};

export default Banner;