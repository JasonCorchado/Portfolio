import React from 'react';
import { Link } from 'react-router-dom'
import Jc from '../imgs/Icons/JC.gif'

function Navbar() {
    return (
        <div className='Navbar'>
            <img src={Jc} alt="gif logo"/>
            <Link to='/'>Home</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default Navbar;