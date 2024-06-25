import React from "react";
import './intro.css';
import {Link} from 'react-scroll';
import profile3 from '../../assets/profile3.jpg';
import shreyansh from '../../assets/shreyansh.jpeg';
import hat from '../../assets/hat.png';

const Intro = () => {

    const download = () => {
        const pdfUrl = "/shreyansh_jain_resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="intro">
            <div className='introContainer'>
                <img src={shreyansh} alt="profile" className="bg" />
                <div className="introContent">
                    <span className="hello">Hi, there</span>
                    <span className="introtext">I am <span className="introName">Shreyansh<br/>Full Stack Developer</span></span>
                    <p className="introPara">Ready to embark on a journey of innovation and creativity in the world of technology development. With a profound love for both front-end and back-end technologies, I'm committed to delivering seamless and user-centric digital solutions.</p>
                    <p className="introPara">Take a moment and explore.</p>
                    <Link>
                        <button className="hireButton" onClick={download}>
                            <img src={hat} alt="hire" className="hireLogo" />
                            Resume/CV
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Intro;
