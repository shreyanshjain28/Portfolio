import React from "react";
import './skills.css';


const Skills = () =>{

    return(

        <section id='skills'>

            <span className="skillTitle">What I do</span>
            <span className="skillDesc">As a versatile professional with a passion for technology, I bring a wealth of experience in full-stack development, data analysis, and software development to every project I undertake. With proficiency in a wide array of programming languages including JavaScript, Node.js, C#/ASP.NET, SQL, Python, and C++, coupled with expertise in frameworks and technologies such as React.js, Express, and MongoDB, I possess the technical acumen to tackle complex challenges effectively. My commitment to excellence extends beyond technical skills, as I excel in communication, collaboration, and problem-solving, leveraging these strengths to drive successful project outcomes. With a solid understanding of concepts like OOPS, Agile methodologies, statistics, and project management, I am well-equipped to navigate diverse project requirements. Armed with a toolkit that includes tools like Visual Studio, Git/GitHub, Jira, and Figma, I am adept at seamlessly integrating cutting-edge technologies into innovative solutions. My dedication to continuous learning and growth is evident in my academic background, where I pursued a degree in Computer Programming from Niagara College, Toronto, refining my skills in web development, software engineering, and system security. Whether it's developing robust web applications, analyzing data insights, or providing technical support, I am committed to delivering excellence and driving tangible value for every project and team I engage with.</span>

            <div className="skillBars">
                
                <div className="skillBar">
                    <img src="./assets/web.jpg" alt="web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Developer</h2>
                        <p>I develop websites and applications tailored to the client's need.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="./assets/developer.jpg" alt="dev" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Python Developer</h2>
                        <p>i write scalable programs to solve the complex problems</p>
                    </div>
                </div>

              
            </div>
        </section>


    );
}

export default Skills;