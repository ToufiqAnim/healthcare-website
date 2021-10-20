

import { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import './SingleService.css';

const SingleService = () => {

    const {id} = useParams()
    //   const {name,image,about,id} = props.service;
       const [serviceDetails, setServiceDetails] = useState([]);
       const [singleService, setSingleService] = useState({})

       useEffect(()=>{
           fetch("/singleService.json")
           .then(res => res.json())
           .then(data => setServiceDetails(data))
       },[]);

    useEffect(() =>{
        const detail = serviceDetails.find(service => service.id === +id);
        setSingleService(detail)  
    },[serviceDetails , id])

  
    return (
        <div className="single-service container mt-5 pt-5 " >

            
            
            <div className="service-text">
            <h3>Name: {singleService?.name}</h3>

            <p><span className="fw-bold fs-4">Details: </span> <br/>{singleService?.about}</p>

            <p><span className="fw-bold fs-4">Procedure: </span> <br/>{singleService?.procedure}</p>

            <h5>{singleService?.cost}</h5>
            <Link to='/contact'>Make An Appoenment</Link>
            </div>
            <div>
            <img className="img-fluid" src={singleService?.image} alt="" />
            </div>
            
            
           
          </div> 
       
    );
};

export default SingleService;


  