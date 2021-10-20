
import React from 'react';
import {  Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className="container mt-5">
            <h1 className=" text-info fw-bold  mb-2 ">Our Offers</h1>
            <hr className='w-25 text-center mb-3'/>
           <Table responsive striped bordered hover>
                <thead>
                    <tr >
                    
                    <th className="p-5 bg-info text-center text-white  fw-bolder">BASIC <hr /> <h1>$150</h1> <p>Regular medical treatments</p> </th>
                    <th className="p-5 bg-info text-center text-white  fw-bolder">Classic <hr /> <h1>$250</h1> <p>Treatments for a whole year
</p> </th>
                    <th className="p-5 bg-info text-center text-white  fw-bolder">ADVANCED <hr />
                    <h1>$650</h1> <p>Full service for a whole year
</p>   </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    <td className="text-center">Routine checkup </td>
                    <td className="text-center">Routine checkup </td>
                    <td className="text-center">Routine checkup </td>
                    
                   
                    </tr>
                    <tr>
                    
                    <td className="text-center">24h Assisance</td>
                    <td className="text-center">24h Assisance</td>
                    <td className="text-center">24h Assisance</td>
                    
                    </tr>
                    <tr>
                    
                    <td className="text-center">100 Tests & Treatments</td>
                    <td className="text-center">100 Tests & Treatments</td>
                    <td className="text-center">100 Tests & Treatments</td>
                    
                    </tr>
                    <tr>
                    
                    <td className="text-center">Regular Health Checkups</td>
                    <td className="text-center">Regular Health Checkups</td>
                    <td className="text-center">Regular Health Checkups</td>
                   
                   
                    </tr>
                    <tr>
                    
                    <td className="text-center">-</td>
                    <td className="text-center">Home Visits </td>
                    <td className="text-center">Home Visits</td>
                    </tr>
                    <tr>
                    
                    <td className="text-center" >-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">Urgent calls</td>
                    </tr>
                    <tr>
                        <td className="text-center bg-secondary ">
                            <Link className=" text-decoration-none text-white fw-bold fs-5" to='/contact'>Sign Up</Link> 
                        </td>

                        <td className="text-center bg-primary">
                            <Link className="text-decoration-none text-white fw-bold fs-5"  to='/contact'>Sign Up</Link>
                         </td>
                        <td className="text-center bg-danger">
                            <Link className="text-decoration-none text-white fw-bold fs-5" to='/contact'>Sign Up</Link> 
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Offers;