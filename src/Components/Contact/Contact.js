import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



import './Contact.css'
const Contact = () => {
    const {signInUsingGogle,signInUsingEmail, handleRegistration,isLogin,handleEmailChange,handleNameChange,handlePasswordChange,toggleLogin,error,handleGoogleSignIn,resetPassBtn}= useAuth();
       
    return (
        <div className='login-form'>
            {/* <div>
                <h2 className='login-text'>Login</h2>
                <form >
                    <input className="email" type="email" placeholder="Enter Your Email" />
                    <br />
                    <input className="email"  type="password" name="" id="" placeholder='Enter Your Password' autoComplete='on'/>
                    <br />
                    <input onClick={signInUsingEmail} className="email" type="submit" />
                </form>
                <p className="text">New to Ema-John ?<Link style={{margin:"10px"}} to="/register">Create Account</Link></p>
                <div className="or">-----or-----</div>
                <button 
                 style={{margin:"10px"}}
                onClick={signInUsingGogle}
                 >Google Sign In</button>
            </div>  */}

            <div className=" App container mt-5" style={{width:"350px"}}>
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary text-center mb-4">Please {isLogin ? 'Login' : 'Register'}</h3>
      
        

          {/* Name */}
          {!isLogin && <div className="row ">
          <label htmlFor="inputName" className="col-sm-2 col-form-label mb-3 fw-bold">Name</label>
          <div className="col-sm-10">

            <input onBlur={handleNameChange} type="text" className="form-control border-0 p-3" id="inputEmail3" placeholder="Enter Your Name" style={{backgroundColor:"#eee"}} required />

          </div>
         </div>
          }
          {/* Email */}
          <div className="row mb-3 mt-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold">Email</label>
          <div className="col-sm-10">

            <input onBlur={handleEmailChange} type="email" className="form-control border-0 p-3" id="inputEmail3" placeholder="Enter Your Email" style={{backgroundColor:"#eee"}} required />
            
          </div>
        </div>

        {/* Password */}
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold">Password</label>
          <div className="col-sm-10">

            <input type="password" onBlur={handlePasswordChange} className="form-control border-0 p-3" id="inputPassword3" autoComplete='on' style={{backgroundColor:"#eee"}} placeholder="Enter Your Password" required />

          </div>
        </div>

        {/* Buttons */}
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Have An Account?
              </label>
            </div>
          </div>
        </div>

        <div className="row text-danger">{error}</div>

        <button type="submit" className="btn btn-success py-2 px-5 mb-3" style={{marginLeft:"180px"}}>
          {isLogin ? 'Login' : 'Register'}
        </button>
        <br />

        {isLogin && <Link onClick={resetPassBtn}  className="mb-4 text-danger " style={{textDecoration:"none" , marginLeft:"120px"}} > Forgot Your Password? <span className="text-success"> Reset Now</span> </Link>}


      </form>
      <br /><br /><br />
      <div>--------------------------------</div>
      <br /><br /><br />
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>

        </div>
    );
};

export default Contact;