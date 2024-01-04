import React from "react";
import './skills.css';


const Skills = () =>{

    return(

        <section id='skills'>

            <span className="skillTitle">What I do</span>
            <span className="skillDesc">i am skilled and passonate Mern stack,web developer with some projects,Ihave been coding since last 4 years. I am profeccient with javascript, python</span>

            <div className="skillBars">
                
                <div className="skillBar">
                    <img src="./assets/web.jpg" alt="web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developer</h2>
                        <p>I develop website for business and personal uses.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="./assets/developer.jpg" alt="dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Python/JavaScaript Developer</h2>
                        <p>i write complex code to solve the problems</p>
                    </div>
                </div>

              
            </div>
        </section>


    );
}

export default Skills;