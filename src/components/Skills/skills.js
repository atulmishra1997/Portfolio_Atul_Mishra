import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'; 
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with knowledge in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, Java, C, as well as design software such as adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I'm skilled for making UI designs using HTML,CSS and JavaScript.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I'm skilled for making such nice Web Designs. </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>I'm skilled for making useful and and responsive Apps.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;