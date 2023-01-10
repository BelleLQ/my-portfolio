import React from 'react';
import shopmartDemoPhoto from '../assets/images/portfolio/shopmart.webp';
import hachuDemoPhoto from '../assets/images/portfolio/hachu.webp';
import employeeDemoPhoto from '../assets/images/portfolio/employment.webp';
import afrocaribDemoPhoto from '../assets/images/portfolio/afrocarib.webp';
import womensdaycontestDemoPhoto from '../assets/images/portfolio/womensdaycontest.webp'
import kellyecommerceDemoPhoto from '../assets/images/portfolio/kellyecommerce.webp'

import reactLogo from '../assets/images/logos/react-badge.webp'
import expressjs from '../assets/images/logos/express-logo.webp'
import mongodb from '../assets/images/logos/mongodb-badge.webp'
import nodejs from '../assets/images/logos/nodejs-badge.webp'
import handlebars from '../assets/images/logos/handlebars-badge.webp'
import postgre from '../assets/images/logos/postgresql-badge.webp'
import wordpress from '../assets/images/logos/wordpress-badge.webp'
import redux from '../assets/images/logos/react-redux-badge.webp'
import tailwind from '../assets/images/logos/tailwind-badge.webp'
import paypallogo from '../assets/images/logos/paypal-badge.webp'

import {IoArrowForwardSharp} from "react-icons/io5";

function Portfolio() {
    const PROJECTTYPE = {self:"Self Project", work:"Work Project"}
    const projects = [
        {
            screenshot:shopmartDemoPhoto,
            title:"Shop Mart Online Store",
            projectType:PROJECTTYPE.self, description:"This is an online shopping website that allow users to browse products, register and log in.",
            stacks: [mongodb,expressjs,reactLogo,nodejs],
            webUrl: "https://shopmart.bellelq.com",
            gitUrl: "https://github.com/BelleLQ/ShopMart-Front"
        },
        {
            screenshot:hachuDemoPhoto,
            title:"Hachu Online Store",
            projectType:PROJECTTYPE.self, description:"This is an online shopping website that allow users to browse products, register and log in.",
            stacks: [mongodb,expressjs,reactLogo,nodejs],
            webUrl: "https://hachu.bellelq.com",
            gitUrl: "https://github.com/BelleLQ/Hachu-React"
        },
        {
            screenshot:employeeDemoPhoto,
            title:"Employment management website",
            projectType:PROJECTTYPE.self, description:"This website is used to manage employees and departments.",
            stacks: [postgre,expressjs,handlebars,nodejs],
            webUrl: "https://yliao-employee.herokuapp.com/",
            gitUrl: "https://github.com/BelleLQ/Employee-management"
        },
        {
            screenshot:afrocaribDemoPhoto,
            title:"2022 Afro Carib Festival",
            projectType:PROJECTTYPE.work, description:"This is the 2022 Afro Carib Festival event website that provides information to the public.",
            stacks: [wordpress],
            webUrl: "https://afrocaribfestival.com/",
            gitUrl: ""
        },
        {
            screenshot:womensdaycontestDemoPhoto,
            title:"2022 Women's Day Contest",
            projectType:PROJECTTYPE.work, description:"This is an advertising landing page made for KellyKinetix for Women Day Contest.",
            stacks: [reactLogo],
            webUrl: "https://www.kellykinetix.com/womensdaycontest",
            gitUrl: ""
        },
        {
            screenshot:kellyecommerceDemoPhoto,
            title:"KellyKinetix Online store",
            projectType:PROJECTTYPE.work, description:"This is an online shopping website made for KellyKinetix that allow users to purchase merchandises online through Paypal.",
            stacks: [reactLogo,redux, tailwind,paypallogo],
            webUrl: "https://www.kellykinetix.com/shop",
            gitUrl: ""
        }
    ]
    return (
        <>
            <div className="portfolio-section section" id="portfolio-section">
                <div className="section container-fluid w-75 text-center pb-5" id="portfolio-section">
                    <h1>Portfolio</h1>
                    <p>Most recent works</p>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                                    aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">

                            {projects.map((project,index)=>{
                                return (
                                <div className={index === 0 ? "carousel-item active" : "carousel-item"}
                                     data-bs-interval={index===0?"10000":"2000"}>
                                    <img
                                        className="d-block carousel-image-left"
                                        src={project.screenshot}
                                        alt="First slide"/>

                                    <div className="carousel-text-right d-block">
                                        <p className="in-section-title pb-0">{project.title}</p>
                                        <p className="pb-4">{project.projectType}</p>
                                        <p className="portfolio-work-desc">{project.description}</p>
                                        <p className="portfolio-work-desc"><br/>Build with: <br/></p>
                                        <div className="portfolio-work-tools row">
                                            {project.stacks.map(stack=>{
                                                return <img className="col-3" src={stack} alt="stack logo"/>
                                            })}
                                        </div>
                                        <div className="btn-group-vertical" role="group"
                                             aria-label="Vertical button group">
                                            <a href={project.webUrl} target="_blank" rel="noreferrer"><button type="button" className="btn btn-dark mt-1 btn-custom">Check out the app<IoArrowForwardSharp/></button></a>
                                            {project.projectType!==PROJECTTYPE.work &&
                                            <a href={project.gitUrl} target="_blank" rel="noreferrer">
                                                <button type="button" className="btn btn-dark mt-1 btn-custom">Check out
                                                    the codes<IoArrowForwardSharp/></button>
                                            </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                                )
                            })}

                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;