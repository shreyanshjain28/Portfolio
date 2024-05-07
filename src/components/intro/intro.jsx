import React from "react";
import './intro.css';
import {Link} from 'react-scroll';

const Intro = ()=>{

    const hiresection = () =>{

        document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});

    } 

    return(

        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi,there </span>
                <span className="introtext">I am <span className="introName">Shreyansh<br/>Full Stack Developer</span></span>
                <p className="introPara">Ready to embark on a journey of innovation and creativity in the world of web development. With a profound love for both front-end and back-end technologies, I'm committed to delivering seamless and user-centric digital solutions.</p>
                <p className="introPara">Take a moment and explore more ..</p>
                <Link>
                <button className="hireButton" onClick={() =>{document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});} }>
                <img src="./assets/hat.png" alt="hire" className="hireLogo" />
                Hire Me
                </button>
               
                

                </Link>
            </div>

           


            <img src="./assets/profile3.jpg" alt="profile" className="bg" /> 




        </section>
    )


}

export default Intro;