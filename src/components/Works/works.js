import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and kowledge to help business achieve their goals and create a strong online presence. </span>
            <div className="worksImgs">
                <a href="https://mern-book-inventory-6cb09.web.app/" target="_blank"><img src={Portfolio1} alt="" className="worksImg"/></a>
                <img src={Portfolio2} alt="" className="worksImg"/>
                <img src={Portfolio3} alt="" className="worksImg"/>
                <img src={Portfolio4} alt="" className="worksImg"/>
                <img src={Portfolio5} alt="" className="worksImg"/>
                <img src={Portfolio6} alt="" className="worksImg"/>
            </div>
            <a href="https://github.com/atulmishra1997/" target="_blank"><button className="worksBtn">See More</button></a>
        </section>
    );
}

export default Works;