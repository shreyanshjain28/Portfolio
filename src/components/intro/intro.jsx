import React from "react";
import './intro.css';
import {Link} from 'react-scroll';

const Intro = ()=>{

    return(

        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi,there </span>
                <span className="introtext">I am <span className="introName">Shreyansh<br/>Mern  Stack Developer</span></span>
                <p className="introPara">An aspiring Full stack developer,<br/>Looking to connect and learn more</p>
                <Link>
                <button className="hireButton"><img src="./assets/hat.png" alt="hire" className="hireLogo" />
                Hire Me   
                </button>
                </Link>
            </div>

           


            <img src="./assets/me.jpg" alt="profile" className="bg" /> 




        </section>
    )


}

export default Intro;