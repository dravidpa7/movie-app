import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-brand'>
            <Link to="/"> Movie App</Link>
        </div>
        <div>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/Favourites" className='Favourites'>Favourites</Link>

        </div>
    </nav>
  )
}

export default NavBar
