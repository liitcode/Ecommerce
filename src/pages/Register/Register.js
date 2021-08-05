import React,{ useState, useEffect } from 'react';
import './Register.scss';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/logo/logo_dark.png';
import { useSelector, useDispatch } from 'react-redux';
import { registerInitiate } from '../../redux/actions';

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const { user } = useSelector(state => state.data);

    let dispatch = useDispatch();
    const historys = useHistory();

    useEffect(()=> {
        if(user) historys.push('/');
    },[user, dispatch]);

    const register = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email,password));
        setEmail('');
        setPassword(''); 
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
                    <Link to='/login' className='register-signin-link'>
                        <p>SignIn</p>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
