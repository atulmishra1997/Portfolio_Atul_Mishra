import React, { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GithubIcon from '../../assets/github-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tjwix8f', 'template_aez517t', form.current, '_sj4hgKpSseG2BjCa')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <input type="mobile" className="mobile" placeholder="Your Mobile No.(Optional)" name="your_mobile"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100091441811251"><img src={FacebookIcon} alt="Facebook" className="link"/></a>
                        <a href="https://twitter.com/brandys_vines1"><img src={TwitterIcon} alt="Twitter" className="link"/></a>
                        <a href="https://www.youtube.com/channel/UC8HpyjHZaJJ4jN1w3XUakGg"><img src={YoutubeIcon} alt="Youtube" className="link"/></a>
                        <a href="https://www.instagram.com/atul_mishra1997/"><img src={InstagramIcon} alt="Instagram" className="link"/></a>
                        <a href="https://www.linkedin.com/in/atulmishra1997/"><img src={LinkedInIcon} alt="LinkedIn" className="link"/></a>
                        <a href="https://github.com/atulmishra1997/"><img src={GithubIcon} alt="Github" className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;