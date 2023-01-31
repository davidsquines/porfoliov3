import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaDumbbell} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import { Link, animateScroll as scroll } from "react-scroll";
// import {ReactComponent as Logo} from '../assets/images/logo.svg'
import resume from '../assets/pdf/DavidQuinesResume.pdf'
import {Fade} from 'react-awesome-reveal'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <div id='navbar'>

        <div className='logo'>
        <Link to="navbar" spy={true}
                smooth={true}
                offset={100}
                duration={500}
                style={{cursor:'pointer'}}>
                  <FaDumbbell/>
              </Link>
        </div>
        <div className='menu-bars' onClick={handleShowNavbar}>
          {showNavbar && 'active' ? <GiHamburgerMenu/> : 
          <RxCross1/>}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
            <li className='hover-underline-animation'>
              <Link to="about" spy={true}
                smooth={true}
                offset={140}
                duration={500}
                onClick={handleShowNavbar}
                style={{cursor:'pointer'}}>
                  About
              </Link>
            </li>
          
            <li className='hover-underline-animation'>
              <Link to="projects" spy={true}
                  smooth={true}
                  offset={170}
                  duration={500}
                  onClick={handleShowNavbar}
                  style={{cursor:'pointer'}}>
                    Projects
              </Link>
            </li>
            <li className='hover-underline-animation'>
              <Link to="contact" spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                    onClick={handleShowNavbar}
                    style={{cursor:'pointer'}}>
                      Contact Me
                </Link>
            
            </li>
            <li>
              
                <a className='resume-link' href={resume} target="_blank">Resume</a>
            </li>
          </ul>
        </div>
        {/* <nav className={`nav-links ${showNavbar && 'active'}`}>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
          <NavLink className='nav-link' to='/projects'>
            Projects
          </NavLink>
          <NavLink className='nav-link' to='/contactme'>
            Contact me
          </NavLink>
          <a href='' target="_blank" className='nav-link resume'>Resume</a>

        </nav> */}
    </div>
  )
}

export default Navbar