import React,{ useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../../logo_dark.png';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to='/'>
                <img src={Logo} alt='logo' className='login-logo'/>
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type='submit' onClick={signIn} className='login-signin'> Sign In</button>
                </form>
                <p>By continuing, you agree to all the Terms and Conditions and Privacy Notice</p>
            </div>
            <p>Don't have an account?</p>
            <Link to='/register'>
                <button className="login-register">Sign Up!</button>
            </Link>
        </div>
    )
}

export default Login;
