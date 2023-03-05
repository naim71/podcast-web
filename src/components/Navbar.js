import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center mx-20 mt-6'>
                <Link to='/'><img src={logo} alt="brand-logo" /></Link>
                <Link to='/about' href="/about.html">About</Link>
            </nav>
        </div>
    );
};

export default Navbar;