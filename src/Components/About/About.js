import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHospitalAlt,FaHeartbeat, FaUserNurse,FaAmbulance } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import image2 from '../image/Screenshot 2021-10-20 130215.png';
import image3 from '../image/image-3.jpg';
import image4 from '../image/image-4.jpeg';
import image5 from '../image/image-6.jpg';

const About = () => {
    return (
        <div>
            <h1 style={{fontSize:"4em"}} className=" text-center p-5 m-5 bg-info px-0 mx-0 text-white fw-bolder">About us</h1>

            <div className="container m-5 p-5">
            <p>What We Stand For</p>
            <hr className="w-25 text-primary"/>
            <h1 className="fw-bold">Our Values</h1>
            </div>
            <Container>
            <Row>

                <Col xs={6} md={4}>
                <i className="fas fa-user-md fs-1 "></i>
                <h5  className="mb-4">Doctor You Choose</h5>
                <p>Our Hospital Has Some Of the World's Best Doctors.</p>
                </Col>
                <Col className="mb-3" xs={6} md={4}>
                    <FaHeartbeat className="fs-1"></FaHeartbeat>
                    <h5 className="mb-4">Your HealthCare</h5>
                    <p>Healthy Life, Happy Life.Yor Health Is Our Top Most Priorty.</p>
                </Col>
                <Col className="mb-3" xs={6} md={4}>
                    <BsFillTelephonePlusFill className="fs-1" />
                    <h5 className="mb-4">Always There For you</h5>
                    <p>We Are Alwaya There For You.We Are Open 24/7.</p>
                </Col>
                <Col className="mb-3" xs={6} md={4}>
                    <FaUserNurse className="fs-1"/>
                <h5 className="mb-4">NURSING STAFF</h5>
                <p>Our Nursing Staff are Best Trained.</p>
                </Col>
                <Col xs={6} md={4}>
                    <FaAmbulance className="fs-1"/>
                    <h5>EMERGENCY SERVICES</h5>
                    <p>Our Emergency Services are One Of The Best.Emergency Services Are Open @4/7</p>
                </Col>
                <Col xs={6} md={4}>
                    <FaHospitalAlt className="fs-1"></FaHospitalAlt>
                    <h5>PREMIUM FACILITIES</h5>
                    <p>Our Hospitals Has All The Necessary Equepments for Our Patients </p>
                </Col>
            </Row>
            </Container>

            

            <div>
                <img className ="my-5" src={image2} alt="" />
            </div>

            <Container className="mb-5">
                <h1 className="text-center">Bord Of Directors</h1>
                <hr className=" mb-5"/>
                <Row>
                    <Col xs={12} md={4}>
                    <img className="img-fluid"  src={image3} alt="" />
                    <p>Heart Specialist</p>
                
                    <h3>Hellen Lowe</h3>
                    </Col>
                    <Col xs={12} md={4}>
                    <img className="img-fluid"  src={image4} alt="" />
                    <p>Pediatrician</p>
                    <h3>Jacob Johnson</h3>
                    </Col>
                    <Col className="img-fluid" xs={12} sm={12} md={4}>
                    <img src={image5} style={{width:"416px"}} alt="" />
                    <p>Dental surgeon</p>
                    <h3>Json Smith</h3>
                    </Col>
                </Row>                      
            </Container>
        </div>
    );
};

export default About;