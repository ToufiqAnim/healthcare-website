import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(() =>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className="services container mt-5"  >
            
            {
                services.map(service =>
                    <SingleService 
                    key={service.id}
                    service={service}
                    ></SingleService>)
            }
            
        </div>
    );
};

export default Services;

{/* <Link style={{textDecoration:"none"}} to={`/service/${id}`}  className="m-2 p-2 rounded btn-primary border-0">Know More</Link>  */}