import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
   
    return (
        <div className="center mt-5">
          <footer>
            <div className="container me-5 mt-5">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link className="footerLink" to="/services">Services</Link></li>
                            <li><Link className="footerLink" to="/about">About</Link></li>
                            <li><Link className="footerLink" to="#">Hosting</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link className="footerLink" to="#">Company</Link></li>
                            <li><Link className="footerLink" to="#">Team</Link></li>
                            <li><Link className="footerLink" to="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                    <Form.Group  controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                    </div>
                    
                </div>
                
            </div>
            
        </footer>
        </div>
    );
};

export default Footer;