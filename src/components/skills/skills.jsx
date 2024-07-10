import React from "react";
import './skills.css';
import web from '../../assets/web.jpg';
import py from '../../assets/py.png';
import js2 from '../../assets/js2.png';
import db from '../../assets/db.jpg';
import developer from '../../assets/developer.jpg';

const Skills = () =>{

    return(

        <section id='skills'>

            <span className="skillTitle">What I do</span>
            <span className="skillDesc">As a dynamic full-stack developer, I bring extensive experience in developing innovative, data-driven solutions. Proficient in JavaScript/TypeScript, ReactJS, NodeJS, Python, SQL, C# and R, I excel in creating scalable and efficient web applications. <br/>  <br/> My technical expertise is complemented by strong skills in communication, collaboration, and problem-solving. With a degree in Computer Programming from Niagara College, Toronto, and hands-on experience in various projects, I am committed to continuous learning and delivering excellence in every endeavor. Whether working on frontend or backend development, I strive to integrate cutting-edge technologies and deliver high-quality, impactful solutions.</span>

            <div className="skillBars">
                
                <div className="skillBar">
                    <img src={web} alt="web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Developer</h2>
                        <p>I develop websites and applications tailored to the client's need. Proficient in MERN stack and other frameworks like Flask and web services.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={js2} alt="dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>JavaScript Developer</h2>
                        <p>i write scalable JavaScript and TypeScript programs to solve the complex problems. I have proficiency in it frameworks like ReactJS, NodeJS ,Express.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={py} alt="dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Python Developer</h2>
                        <p>I have good experience in python programing, performing data analysis and visulization using it's libraries like Pandas/Sci-kit and Matplotlib.</p>
                    </div>
                </div>


                <div className="skillBar">
                    <img src={db} alt="dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>SQL/NoSQL</h2>
                        <p>I Have been using SQL and NoSql databases like MySQL server, SQLite, CassandraDB to host servers/data.</p>
                    </div>
                </div>

                
                <div className="skillBar">
                    <img src={developer} alt="dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Tools</h2>
                        <p>Some tools used by me are - MS Suite, Jira , Power Apps, Git/GitHub, SalesForce, Figma, R-studios, VMware. </p>
                    </div>
                </div>

              
            </div>
        </section>


    );
}

export default Skills;