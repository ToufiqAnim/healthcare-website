import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import SingleService from '../SingleService/SingleService';
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
            
          {/*   {
                services.map(service =>
                    <SingleService 
                    key={service.id}
                    service={service}
                    ></SingleService>)
            } */}
          {
              services.map(service =>(
                  
                <div
                key={service.id}
                style={{height:"500px",backgroundColor:"whitesmoke"}} className="">

                    <img className='img-fluid ' style={{height:"250px", width:"100%"}} src={service.image} alt="" />
                    <h3 className="p-2">{service.name}</h3>
                    <p className='p-2' style={{fontSize:"15px"}}>{service.about}</p>
                    <Link style={{textDecoration:"none"}} to={`/services/${service.id}`}  className="m-2 p-2 rounded btn-primary border-0">Know More</Link>
                    
                </div>
                
              ))
          }  
        </div>
    );
};

export default Services;

{/* <Link style={{textDecoration:"none"}} to={`/service/${id}`}  className="m-2 p-2 rounded btn-primary border-0">Know More</Link>  */}