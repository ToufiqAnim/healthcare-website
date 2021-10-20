import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../image/BGImg_@.jpg'

const Banner = () => {
    return (
        <div >
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                    style={{height:"900px"}}
                    className="d-block w-100 img-fluid"
                     src={image1} alt="" />
                     
                    <Carousel.Caption style={{ position:" absolute", top:"300px"}}>
                    <h3 style={{fontSize:"70px"}}> Healthy Life <br/>
                    <span>Happy Life</span></h3>
                    <p className="mb-4 mt-3">We Are Always Ready To Help You</p>
                    <Link to='*' className="text-decoration-none p-3 btn-danger fw-bolder rounded" >Know More</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                
                
                </Carousel>
        </div>
    );
};

export default Banner;