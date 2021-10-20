import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        
            
            <div className="login-form">
            <div>
                <h2>Create Your Account</h2>
                <form >
                    <input type="email" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder='Enter Your Password'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter Your Password' />
                    <br />
                    <input type="submit" />
                </form>
                <p>Already Have An Account? <Link to="/contact">Login</Link></p>
                <div>-----or-----</div>
                <button>Google Sign In</button>
            </div>
            </div>
        
    );
};

export default Register;
