import React from "react";
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Service_id, Template_id, Public_key } from "../../config";
const Contact = ()=>{

    const form = useRef(); 
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(`${Service_id}`, `${Template_id}`, form.current,`${Public_key}`)
            .then((result) => {
                console.log(result.text);
                alert("email sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
        };

    return(

        <section id="contactPage">
            
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"> Please fill out this form to connect</span>

                <form className="contactForm" ref={form} onSubmit={sendEmail}> 
                    <input type="text" className="name" placeholder='Your name'  name='from_name' required/>     
                    <input type="text" className="email" placeholder='Your email' name='your_email' required/>

                    <textarea className="message" name='message' rows="5" placeholder="enter your message" required></textarea>
                    
                    <button type="submit" className="submitBtn" value="send">Submit</button>

                    <div className="links">
                        <div><h3 className="headingConnect"> Let's connect | </h3></div>
                        <div>
                            <a href="https://www.linkedin.com/in/shreyansh-jain-86a005251/"><img src="./assets/linkedin.png" alt="linkedin" className="link" /></a>
                            <a href="https://github.com/shreyanshjain28"><img src="./assets/github.png" alt="GitHub" className="link" /> </a>
                        </div>
                       
                    </div>

                </form>
        
        </section>
    );


}

export default Contact;
