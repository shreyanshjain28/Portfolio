import React from "react";
import './works.css';

const Works = () =>{
    return (
        
        <section id='works'>
            <span className="workTitle">My Work</span>
            <span className="workIntroDesc">"I have gained diverse experience in web development, honing my skills across various technologies and platforms. Notable projects include the development of a dynamic restaurant website using PHP and MySQL, allowing customers to reserve tables, leave reviews, and order online. Additionally, I led the creation of a prototype/UI for a real estate management application using Figma, demonstrating my proficiency in design and prototyping. Moreover, I spearheaded the development of a robust web application for visitor tracking and reporting system using React and Node.js, showcasing my ability to deliver efficient solutions. Furthermore, I created a weather application in JavaScript, integrating APIs to enable users to track weather conditions worldwide. These experiences have equipped me with a solid foundation in web development and a passion for creating impactful solutions."</span>

            <div className="worksImgs">
                <div className="container">
                    <img src='./src/assets/php.jpg' alt= '' className='worksImg' />
                    <div className='t'>
                        <div className="workdesc">
                            <h3 className='work-heading'> Restaurant Website - PHP + MYSQL</h3>
                            <p>Developed website for restaurant. Customer's can reserve table, leave reviews, order online for university project.</p>
                        </div>
                        <a href= 'https://github.com/shreyanshjain28/courtyard.git' ><img src="./src/assets/github.png" alt="github_code" className="link" /></a>
                    </div>
                </div>

                <div className="container">
                    <img src='./src/assets/figma.jpg' alt= '' className='worksImg' />
                    <div className='t'>
                        <div className="workdesc">
                            <h3 className='work-heading'> Home Hub - Prototyping </h3>
                            <p> Developed a prototype/UI for real estate management application udsing Figma for university project.</p>
                        </div>
                        <a href= 'https://www.figma.com/file/L7vyFTc1J9pb3gzzBa75O0/home-hub?type=design&node-id=0-1&mode=design&t=mNcaVHtfQ6lAvA0y-0' ><img src="./src/assets/figmaButton.png" alt="github_code" className="link" /></a>
                    </div>
                </div>

                <div className="container">
                    <img src='./src/assets/work3a.png' alt= '' className='worksImg' />
                    <div className='t'>
                        <div className="workdesc">
                            <h3 className='work-heading'> Visitor Tracking and Reporting System - REACT + NODE JS</h3>
                            <p> Developed a robust web application, facilitating efficient visitor tracking and reporting system for client.</p>
                        </div>
                        <a href= 'https://github.com/shreyanshjain28/Visitor_tracking_system.git' ><img src="./src/assets/github.png" alt="github_code" className="link" /></a>
                    </div>
                </div>

                <div className="container">
                    <img src='./src/assets/weather.png' alt= '' className='worksImg' /> 
                    <div className='t'>
                        <div className="workdesc">
                            <h3 className='work-heading'> Weather Application - JAVASCRIPT + API </h3>
                            <p> Cusotmers can track weather across the globe using the application.</p>
                        </div>
                        <a href= 'https://github.com/shreyanshjain28/Weather-app.git' ><img src="./src/assets/github.png" alt="github_code" className="link" /></a>
                    </div>
                </div>   
            </div>
        </section>
    )
}

export default Works;