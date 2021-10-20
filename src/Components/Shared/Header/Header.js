import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            
       
             <Navbar expand="lg" className='m-0 p-0'  style={{lineHeight:"80px", backgroundColor:"#eee"}}>
            <Container > 
                <Navbar.Brand as={Link} to="/home" className="fs-1 fw-bold text-info" >
                <i class="fas fa-hospital-alt"></i>
                     MediPlus 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{marginLeft:"25%"}}>
                        <Nav.Link as={Link} to="/home" className="fs-5 text-dark pe-3">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="fs-5 text-dark pe-3">Services</Nav.Link>
                        <Nav.Link as={Link} to="/department" className="fs-5 text-dark pe-3">Department</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="fs-5 text-dark  pe-3">About</Nav.Link>
                        <Nav.Link as={Link} to="/offers" className="fs-5 text-dark  pe-3">Special Offers</Nav.Link>
                        

                       {user.email ? 
                       
                       <Nav.Link as={Link} onClick={logOut} to="/contact" className="fs-3 fw-bold text-primary pe-3">LogOut</Nav.Link> 
                       
                       :<Nav.Link as={Link} to="/contact" className="fs-3 fw-bold text-info pe-3">LogIn</Nav.Link> 
                        }
                        <span className="pt-2">{user.displayName}</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
    );
};

export default Header;