import React from "react";
import './skills.css';


const Skills = () =>{

    return(

        <section id='skills'>

            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a innovative Full stack Developer with a passion for crafting dynamic software solutions. Proficient in JavaScript/TypeScript, Python, Node.js and related
frameworks</span>

            <div className="skillBars">
                
                <div className="skillBar">
                    <img src="./assets/web.jpg" alt="web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Developer</h2>
                        <p>I develop website and applications  for business and personal uses.</p>
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