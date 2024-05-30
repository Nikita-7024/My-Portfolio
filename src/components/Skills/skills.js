import React from "react";
import './skills.css'
import BackendDevelopment from '../../assets/ui-design.png'
// import {Link} from 'react-scroll'
import WebDevelopment from '../../assets/website-design.png'
import FrontendDevelopment from '../../assets/app-design.png'


const Skills = () => {
    return (
       <section id="skills">
        <span className="skillTitle" >What I Do</span>
        <span className="skillDesc" >I am a skilled and passionate Web Developer with experience in creating and 
        developing a user friendly websites. I have a good knowledge and strong understanding of both backend and 
        frontend technologies along with databases, version control and server side technologies that will be 
        helpfull to develop a websites.</span>

        <div className="skillBars">

            <div className="skillBar">
                <img src={BackendDevelopment} alt="BackendDevelopment" className="skillBarImg"/>
                <div className="skillBarText" >
                    <h2>Backend Development</h2>
                    <p>This is a demo text, you can write your content here</p>
                </div>
            </div>


            <div className="skillBar">
                <img src={FrontendDevelopment} alt="FrontendDevelopment" className="skillBarImg"/>
                <div className="skillBarText" >
                    <h2>Frontend Development</h2>
                    <p>This is a demo text, you can write your content here</p>
                </div>
            </div>


            <div className="skillBar">
                <img src={WebDevelopment} alt="WebDevelopment" className="skillBarImg"/>
                <div className="skillBarText" >
                    <h2>Web Development</h2>
                    <p>This is a demo text, you can write your content here</p>
                </div>
            </div>

        </div>
       </section>
    )
}

export default Skills;