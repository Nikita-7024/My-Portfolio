import React from "react";
import './about.css'
import backgroundImg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'


const About = () => {
    return (
        <section id="about"> 

        <div className="aboutContent">
            <span className="hello" > Hello </span>
            <span className="introText" > I'm <span className="introName" >Nikita Singh </span> <br /> Web Developer </span>
            <p className="introPara" >I am a experienced Web Developer with ability to develope website 
            using MERN Technology.<br /></p>
           <Link>
           <button className="btn"> <img src={btnImg} alt="btnImg" className="btnImg" />Hire Me </button>
           </Link>
        </div>

        <img src={backgroundImg} alt="backgroundImg" className="backgroundImg"/>

        </section>
    )
}

export default About;