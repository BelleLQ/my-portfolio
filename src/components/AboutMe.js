import React from 'react'
import aboutMePic from '../assets/images/about-me-photo.webp'
import { AiOutlineCloudDownload } from "react-icons/ai";
import myResume from '../assets/download/Yu-Hsuan Liao Resume.pdf';

function AboutMe() {
    return (
        <div className="about-me-section section">
        <div className="container-fluid w-75 text-center " id="about-section">
            <h1>About Me</h1>
            <div className="row d-flex justify-content-center pt-5">
            <div className="col-12 col-md-6">
                <img className="about-me-img" src={aboutMePic}/>
            </div>
            <div className="col-12 col-md-6">
                <h2>Education</h2>
                <div className="py-3">
                    <p className="in-section-title about-me-title">Computer Programming & Analysis Student</p>
                    <div className="d-flex">
                    <p className="about-me-school d-inline-block"> Seneca College, Ontario</p>
                    <p className="d-inline-block ms-auto ">2020-2022</p>
                    </div>
                </div>
                <div className="py-3">
                    <p className="in-section-title about-me-title">Master of Electrophysics</p>
                    <div className="d-flex">
                        <p className="about-me-school d-inline-block"> Yang Ming Chiao Tung University, Taiwan</p>
                        <p className="d-inline-block ms-auto ">2015-2017</p>
                    </div>
                </div>
                <a href={myResume} download><button type="button" className="btn btn-dark">
                    Download my resume <AiOutlineCloudDownload/></button></a>
                <div className="d-none">
                <div className="row pt-5">
                    <div className="col"><h2>1</h2></div>
                    <div className="col"><h2>5+</h2></div>
                    <div className="col"><h2>0</h2></div>
                </div>
                <div className="row">
                    <div className="col">Year Experience</div>
                    <div className="col">Projects</div>
                    <div className="col">Companies</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;