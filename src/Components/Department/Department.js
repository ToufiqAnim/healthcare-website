import React from 'react';


import image1 from "../image/department-1.jpg"
import image2 from "../image/Department-2.jpg"
import image3 from "../image/Department-3.jpg"
import image4 from "../image/department-4.jpg"
import './Department.css'
const Department = () => {
    return (
        <div className="container department">
           
              
               <div className="m-5" style={{backgrounddivor:"#eee"}} ><img style={{width:"550px"}} src={image1} alt="" />
               
                   <h3 className="py-3 text-success">PEDIATRIC</h3>
                   <p style={{width:"550px", textAlign:"justify", color:"gray"}}>Paediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people seek pediatric care through the age of 21.</p>
               
               </div>
              
               <div className="m-5" style={{backgrounddivor:"#eee"}}><img style={{width:"550px"}} src={image2} alt="" />
               
               <h3 className="py-3 text-success">Dental</h3>
                   <p style={{width:"550px", textAlign:"justify", color:"gray"}}>Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral</p>
               </div>
               
               <div  className="m-5" style={{backgrounddivor:"#eee"}}><img style={{width:"550px"}} src={image3} alt="" />
               <h3 className="py-3 text-success">PHYSICIANS</h3>
                   <p style={{width:"550px", textAlign:"justify", color:"gray"}}>A physician is a general term for a doctor who has earned a medical degree. Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases.</p>
               </div>
               
               <div className="m-5" style={{backgrounddivor:"#eee"}}><img style={{width:"550px"}} src={image4} alt="" />
               <h3 className="py-3 text-success">Interventional cardiology</h3>
                   <p style={{width:"550px", textAlign:"justify", color:"gray"}}>is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.</p>
               </div>
              
               
               

        </div>
    );
};

export default Department;