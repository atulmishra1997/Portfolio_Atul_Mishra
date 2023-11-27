import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return(
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Atul</span> <br /> <span className="introHead">Full Stack <br/> Developer</span></span>
            <p className="introPara">I am a skilled full stack developer for creating visually appealing <br/> and user-friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="Download CV" className="btnImg"/>Download CV</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
    )
}

export default Intro;