import React from 'react';
import { HashLink } from 'react-router-hash-link';
import introPhoto from '../assets/images/intro-photo.webp';
import {IoPaperPlaneOutline} from "react-icons/io5";
import {BsLinkedin,BsGithub} from "react-icons/bs";

function Home() {
    return (
        <div id="home-section" className="section d-flex w-75 mx-auto my-5">
            <div  className="row m-auto w-100 text-center">
                <div className="col-12 col-md-1 my-auto">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/yu-hsuan-liao-a551b01b5" target="_blank"><BsLinkedin className="home-links"/></a></li>
                        <li><a href="https://github.com/BelleLQ" target="_blank"><BsGithub  className="home-links"/></a></li>
                    </ul>
                </div>
                <div className="home-introduction col-12 col-md-6 my-auto">
                    <p className="home-intro-title">Hi, I am Belle.</p>
                    <div className="home-img col-12 my-auto home-mobile-img">
                        <img src={introPhoto} className="home-pic"/>
                    </div>
                    <p className="home-intro-job">Future Full Stack Developer</p>
                    <p className="home-intro-desc">Enthusiastic in web development</p>
                    <HashLink to="/#contact-me-section"><button type="button" className="btn btn-dark">Contact Me <IoPaperPlaneOutline/></button></HashLink>
                </div>
                <div className="home-img col-md-5 my-auto home-desktop-img">
                    <img src={introPhoto} className="home-pic"/>
                </div>
            </div>
        </div>
    );
}

export default Home;