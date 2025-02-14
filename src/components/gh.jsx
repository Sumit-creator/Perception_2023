import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'
import { MdMenu, MdOutlineClose } from "react-icons/md";
import logo from '../Assets/images/Homelogo.png';
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [menuicon, seticon] = useState(<MdMenu />)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        if (!showNavbar)
        {
            seticon(<MdOutlineClose />)
        }
        else
        {
            seticon(<MdMenu />)
        }
    }
    return (
        <nav className="navbar">
        <div className="container">
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                {menuicon}
            </div>
            <div
                className={`nav-elements  ${showNavbar && 'active'}`}
            >
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/blog">About</NavLink>
                </li>
                <li>
                <NavLink to="/projects">Skills</NavLink>
                </li>
                <li>
                <NavLink to="/about">Works</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Education</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Header;