import React,{ useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../../logo_dark.png';


const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <div className="register">
            <Link to='/'>
                <img src={Logo} alt='logo' className='register-logo'/>
            </Link>
            <div className="register-container">
                <h1>Create Account</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                    type= 'text' 
                    value= {email} 
                    onChange= {(e)=>setEmail(e.target.value)} 
                    />
                    <h5>Password</h5>
                    <input 
                    type= 'password' 
                    value= {password} 
                    onChange= {(e)=>setPassword(e.target.value)} 
                    />
                    <button type='submmit' className='continue' onClick={register}>Continue
                    </button>
                    <div className="detail">
                    <p>Already have an account?</p>
                    <Link to='/login' className='signin-link'>
                        <p>SignIn</p>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
