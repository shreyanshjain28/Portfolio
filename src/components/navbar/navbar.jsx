import React, { useState } from "react"
import './navbar.css'
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(false)
    return (     
            <nav className="navbar">
                <img className="MainLogo" src={logo} alt="Logo" />
                <div className="desktopMenu"  > 
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="DekstopMenuListItem"  >Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="DekstopMenuListItem" >About</Link>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="DekstopMenuListItem" >Works</Link>
                    <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="DekstopMenuListItem" >Connect</Link>
                </div>

                <button className="contactButton" onClick={() =>{

                    document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});

                } }>

                    <img src={contact} alt="ContactMe" className="contactLogo" />
                    Contact Me   
                </button>

                <img className="mobMenuLogo" src={menu} alt="Logo" onClick={()=> setShowMenu(!showMenu)} />
                <div className="navMenu" style={{display:showMenu? 'flex' : 'none'}}>

                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=> setShowMenu(false)} >Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)} >About</Link>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)} >Works</Link>
                    <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)} >Connect</Link>
                </div>
            </nav>
    )

}

export default Navbar