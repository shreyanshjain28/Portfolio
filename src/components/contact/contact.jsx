import React from "react";
import './contact.css';

const Contact = ()=>{

    return(

        <section id="contactPage">
            
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"> Please fill out this form to connect</span>

                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your name' />
                    <input type="text" className="email" placeholder='Your email' />

                    <textarea className="message" name="message" rows="5" placeholder="enter your message"></textarea>
                    
                    <button type="submit" className="submitBtn" value="send">Submit</button>

                    <div className="links">
                        <img src="./assets/linkedin.png" alt="linkedin" className="link" />
                        <img src="./assets/github.png" alt="GitHub" className="link" />
                        <img src="./assets/x.jpg" alt="X" className="link" />
                        <img src="./assets/youtube.png" alt="Youtube" className="link" />
                    </div>

                </form>
        
        </section>
    );


}

export default Contact;
