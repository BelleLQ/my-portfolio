import React, {useState} from 'react'
import aboutMePic from '../assets/images/about-me-photo.webp'
import { AiOutlineCloudDownload } from "react-icons/ai";
import myResume from '../assets/download/Yu-Hsuan Liao Resume.pdf';
import kellylogo from "../assets/images/experience/KellyKinetix logo.jpeg"
import hsdclogo from "../assets/images/experience/hsdc_logo.png"
import {BiRadioCircleMarked} from "react-icons/bi"
import {HashLink} from "react-router-hash-link";

function AboutMe() {
    const [experienceTab, setExperienceTab] = useState(true)
    const switchToExperience = () =>{
        if(!experienceTab) {
            setExperienceTab(true)
            let activeInfoBlock = document.getElementsByClassName('shown-info-block');
            if (activeInfoBlock.length > 0) activeInfoBlock[0].classList.remove('shown-info-block');
            document.getElementById("experience-section").classList.add("shown-info-block");
        }
    }
    const switchToEducation = () =>{
        if(experienceTab) {
            setExperienceTab(false)
            let activeInfoBlock = document.getElementsByClassName('shown-info-block');
            if (activeInfoBlock.length > 0) activeInfoBlock[0].classList.remove('shown-info-block');
            document.getElementById("education-section").classList.add("shown-info-block");
        }
    }
    return (
        <div className="about-me-section section">
            <div className="container-fluid w-75 text-center " id="about-section">
                <h1>About Me</h1>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={switchToExperience}>Experience</button>
                    <button type="button" className="btn btn-dark" onClick={switchToEducation}>Education</button>
                </div>
                {/*Education section*/}
                <div id="education-section">
                    <div className="row d-flex justify-content-center pt-5">
                        <div className="col-12 col-md-6">
                            <img className="about-me-img" src={aboutMePic} alt="me"/>
                        </div>

                        <div className="col-12 col-md-6">
                            <h2>Education</h2>
                            <div className="py-3">
                                <p className="in-section-title about-me-title">Diploma in Computer Programming </p>
                                <div className="d-flex">
                                <p className="about-me-school d-inline-block"> Seneca College, Ontario</p>
                                <p className="d-inline-block ms-auto ">2020-2023</p>
                                </div>
                            </div>

                            <div className="py-3">
                                <p className="in-section-title about-me-title">Master of Engineering in Electrophysics</p>
                                <div className="d-flex">
                                    <p className="about-me-school d-inline-block"> Chiao Tung University, Taiwan</p>
                                    <p className="d-inline-block ms-auto ">2015-2017</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center" style={{columnGap: "10px"}}>
                                <HashLink to="/#portfolio-section"><button type="button" className="btn btn-dark">Check Out My Works</button></HashLink>
                                <a href={myResume} download><button type="button" className="btn btn-dark">
                                    Download my resume <AiOutlineCloudDownload/></button></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Experience section*/}
                    <div id="experience-section" className="shown-info-block">
                        <div className="row d-flex pt-5">
                            <div className="col-12 col-md-6">
                                <img className="about-me-img" src={aboutMePic} alt="me"/>
                            </div>

                            <div className="col-12 col-md-6">
                                <h2>Experience</h2>
                                <div className="py-3">
                                    <div className="d-flex flex-row experience-title">
                                        <img className="experience-logo" src={kellylogo} alt="kellykinetix log"/>
                                        <p className="in-section-title about-me-title">KellyKinetix</p>
                                        <p className="d-inline-block ms-auto ">North York, ON, CA  </p>
                                    </div>
                                    <div className="d-flex experience-jobtitle">
                                        <p className="about-me-school d-inline-block"><BiRadioCircleMarked/> Apprentice Web Developer</p>
                                        <p className="d-inline-block ms-auto ">Jul 2022 - Present  </p>
                                    </div>
                                    <div className="d-flex experience-jobtitle">
                                        <p className="about-me-school d-inline-block"><BiRadioCircleMarked/> Web Developer Intern</p>
                                        <p className="d-inline-block ms-auto ">Jan 2022 - Jul 2022</p>
                                    </div>
                                </div>

                                <div className="py-3">
                                    <div className="d-flex flex-row experience-title">
                                        <img className="experience-logo" src={hsdclogo} alt="hsdc logo"/>
                                        <p className="in-section-title about-me-title">Heritage Skills Development Center</p>
                                        <p className="d-inline-block ms-auto ">Scarborough, ON, CA  </p>
                                    </div>
                                    <div className="d-flex experience-jobtitle">
                                        <p className="about-me-school d-inline-block"><BiRadioCircleMarked/> Web Developer/Designer Co-op</p>
                                        <p className="d-inline-block ms-auto ">Jan 2022 - Apr 2022</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center" style={{columnGap: "10px"}}>
                                <HashLink to="/#portfolio-section"><button type="button" className="btn btn-dark">Check My Works</button></HashLink>
                                <a href={myResume} download><button type="button" className="btn btn-dark">
                                    Download my resume <AiOutlineCloudDownload/></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


        </div>
    );
}

export default AboutMe;