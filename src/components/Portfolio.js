import React from 'react';
import shopmartDemoPhoto from '../assets/images/portfolio/shopmart.webp';
import hachuDemoPhoto from '../assets/images/portfolio/hachu.webp';
import employeeDemoPhoto from '../assets/images/portfolio/employment.webp';
import reactLogo from '../assets/images/logos/react-badge.webp'
import expressjs from '../assets/images/logos/express-logo.webp'
import mongodb from '../assets/images/logos/mongodb-badge.webp'
import nodejs from '../assets/images/logos/nodejs-badge.webp'
import handlebars from '../assets/images/logos/handlebars-badge.webp'
import postgre from '../assets/images/logos/postgresql-badge.webp'
import {IoArrowForwardSharp} from "react-icons/io5";

function Portfolio() {
    return (
        <>
            <div className="portfolio-section section">
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
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img
                                    className="d-block carousel-image-left"
                                    src={shopmartDemoPhoto}
                                    alt="First slide"/>

                                <div className="carousel-text-right d-block">
                                    <p className="in-section-title">Shop Mart Online Store</p>
                                    <p className="portfolio-work-desc">This is an online shopping website that allow users to browse products, register and log in.</p>
                                    <p className="portfolio-work-desc"><br/>Build with: <br/></p>
                                    <div className="portfolio-work-tools row">
                                        <img className="col-3" src={mongodb}/>
                                        <img className="col-3" src={expressjs}/>
                                        <img className="col-3" src={reactLogo}/>
                                        <img className="col-3" src={nodejs}/>
                                    </div>
                                    <a href="https://flamboyant-morse-789f6d.netlify.app/" target="_blank"><button type="button" className="btn btn-dark">Check it out <IoArrowForwardSharp/></button></a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">

                            <img
                                    className="d-block carousel-image-left"
                                    src={hachuDemoPhoto}
                                    alt="First slide"/>

                                <div className="carousel-text-right  d-block">
                                    <p className="in-section-title">Hachu Online Store</p>
                                    <p className="portfolio-work-desc">This is an online shopping website that allow users to browse products, register and log in.
                                    </p>
                                    <p className="portfolio-work-desc"><br/>Build with: <br/></p>
                                    <div className="portfolio-work-tools row">
                                        <img className="col-3" src={mongodb}/>
                                        <img className="col-3" src={expressjs}/>
                                        <img className="col-3" src={reactLogo}/>
                                        <img className="col-3" src={nodejs}/>
                                    </div>
                                    <a href="https://optimistic-thompson-bbce25.netlify.app/" target="_blank"><button type="button" className="btn btn-dark">Check it out <IoArrowForwardSharp/></button></a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img
                                    className="d-block carousel-image-left"
                                    src={employeeDemoPhoto}
                                    alt="First slide"/>

                                <div className="carousel-text-right d-block">
                                    <p className="in-section-title">Employment management website</p>
                                    <p className="portfolio-work-desc">This website is used to manage employees and departments.</p>
                                    <p className="portfolio-work-desc"><br/>Build with: <br/></p>
                                    <div className="portfolio-work-tools row">
                                        <img className="col-3" src={postgre}/>
                                        <img className="col-3" src={expressjs}/>
                                        <img className="col-3" src={handlebars}/>
                                        <img className="col-3" src={nodejs}/>
                                    </div>
                                    <a href=" https://yliao-employee.herokuapp.com/" target="_blank"><button type="button" className="btn btn-dark">Check it out <IoArrowForwardSharp/></button></a>
                                </div>
                            </div>

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