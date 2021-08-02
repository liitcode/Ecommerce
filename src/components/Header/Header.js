import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutlinedIcon  from '@material-ui/icons/ShoppingCartOutlined';
import { Link  } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>
                <img 
                    className='header-logo' 
                    src={logo} 
                    alt='logo'
                />
            </Link>
            <div className='header-option' style={{marginRight : "-10px"}}>
                <LocationOnOutlinedIcon />
            </div>
            <div className='header-option'>
                <span className='header-option1'>Hello</span>
                <span className='header-option2'>Select Your Address</span>
            </div>
            <div className='search'>
                <select>
                    <option>All</option>
                </select>
                <input type='text' className='searchInput'/>
                <SearchIcon className='searchIcon'/>   
            </div>
            <div className='header-nav'>
                <Link to='/login' className='header-link'>
                    <div className='header-option'>
                    <span className='header-option1'>Hello Guest</span>
                    <span className='header-option2'>Sign In</span>
                    </div>
                </Link>
                <Link to='/orders' className='header-link'>
                    <div className='header-option'>
                    <span className='header-option1'>Returns</span>
                    <span className='header-option2'>& Orders</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header-link'>
                    <div className='header-basket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header-option2 basket-count'>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
