import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../Shared/Banner/Banner';

import Services from '../Services/Services';
import image4 from "../../image/image-4.jpeg";
import image5 from "../../image/national-doctors-day-1-920x518.jpg";
import image6 from "../../image/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg";
import image7 from "../../image/file-20191203-66986-im7o5.jpg";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 style={{fontSize:"4em"}} className=" text-center p-5 m-5  px-0 mx-0 text-info fw-bolder">Services</h1>
            <Services></Services>
           <div className="mt-5 pt-5" >
               <div className="p-5" style={{backgroundColor:"#eee"}}>
               <Container>
                    <Row>
                        <Col className="p-5" xs={12} md={6}>
                            <h1 style={{fontSize:"80px"}}>Our <span className="text-info">Team</span> </h1>
                            <p>
                            Dr. Jacob Johnson is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Jacob Johnson found his calling to help others get well.
                            </p>
                        </Col>
                        <Col xs={12} md={6}>
                            <img className="img-fluid" src={image4} alt="" />
                        </Col>
                    </Row>

               </Container>

               
               </div>
           </div>

            <div className="mt-5">
           <Container>
               <h1 className="text-center text-info text-bold mb-4">Members</h1>
                   <Row>
                       <Col style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}  xs={12} sm={4}>

                           <img   style={{width:"100%", height:"278px"}} src={image5} alt="" />
                           <p className="text-primary">Dental surgeon</p>
                           <h3 className='text-info'>Sussie Wolff</h3>

                       </Col>

                       <Col  style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} xs={12} sm={4}>

                           <img  style={{width:"100%", height:"278px"}} src={image6} alt="" />
                           <p className="text-primary">General Doctor</p>
                           <h3 className='text-info'>James Johnson</h3>

                       </Col>
                       
                       <Col  style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} xs={12} sm={4}>

                           <img  style={{width:"100%", height:"278px"}}  src={image7} alt="" />
                           <p className="text-primary">Cosmetic Surgeon</p>
                           <h3 className='text-info'>Ashley Willson</h3>
                           
                       </Col>
                     
                      
                   </Row>
             </Container>                
            </div>
        </div>
    );
};

export default Home;