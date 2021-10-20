

import { Link} from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {


      const {name,image,about,id} = props.service;
        
    return (
        <div className="service " >
            
            <div
                
               
            style={{height:"500px",backgroundColor:"whitesmoke"}} className="">
                <img className='img-fluid ' style={{height:"250px", width:"100%"}} src={image} alt="" />
                <h3 className="p-2">{name}</h3>
                <p className='p-2' style={{fontSize:"15px"}}>{about}</p>
                <Link style={{textDecoration:"none"}} to={id}  className="m-2 p-2 rounded btn-primary border-0">Know More</Link>
            </div>
               

           
          </div> 
       
    );
};

export default SingleService;




{/* <img className='img-fluid rounded-top' style={{height:"250px", width:"100%"}} src={image} alt="" />
            <h3 className="p-2">{name}</h3>
            <p className='p-2' style={{fontSize:"15px"}}>{about}</p>
            <Link style={{textDecoration:"none"}} to={`/service/${id}`}  className="m-2 p-2 rounded btn-primary border-0">Know More</Link> */}