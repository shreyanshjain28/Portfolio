import React from "react"
import './navbar.css'
import {Link} from 'react-scroll';


const Navbar = () => {
    
    return ( 
    
            <nav className="navbar">
                <img className="MainLogo" src="./assets/logo.png" alt="Logo" />
                <div className="desktopMenu">
                    <Link className="DekstopMenuListItem">Home</Link>
                    <Link className="DekstopMenuListItem">About</Link>
                    <Link className="DekstopMenuListItem">Projects</Link>
                    <Link className="DekstopMenuListItem">Blogs</Link>


                </div>

                <button className="contactButton">

                    <img src="./assets/contact.png" alt="" className="contactLogo" />
                    Contact Me   
                </button>


            </nav>
    
    
    
    )

}

export default Navbar