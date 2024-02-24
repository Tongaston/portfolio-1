import React from 'react';
import './navbar.css';

import { Link } from 'react-scroll';

import logoNavbar from '../../assets/imagen-favicon.png'
import iconMsj from '../../assets/icono-contact.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src= {logoNavbar} alt='Logo Gastón Moure Developer' className='logoNavbar' />
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Technologies</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={iconMsj} alt='contact me icon' className='desktopMenuIcon' />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar