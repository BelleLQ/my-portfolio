import React from 'react'
import html from '../assets/images/logos/html5-badge.webp'
import css from '../assets/images/logos/css3-badge.webp'
import js from '../assets/images/logos/javascript-badge.webp'
import ts from '../assets/images/logos/typescript-badge.webp'
import bs from '../assets/images/logos/bootstrap-badge.webp'
import handlebars from '../assets/images/logos/handlebars-badge.webp'
import reactLogo from '../assets/images/logos/react-badge.webp'
import angular from '../assets/images/logos/angular-badge.webp'
import mysql from '../assets/images/logos/mysql-badge.webp'
import mongodb from '../assets/images/logos/mongodb-badge.webp'
import mongoose from '../assets/images/logos/mongoose-badge.webp'
import nodejs from '../assets/images/logos/nodejs-badge.webp'
import expressjs from '../assets/images/logos/express-logo.webp'
import postman from '../assets/images/logos/postman-badge.webp'
import jest from '../assets/images/logos/jest-badge.webp'
import figma from '../assets/images/logos/figma-badge.webp'
import git from '../assets/images/logos/git-badge.webp'
import github from '../assets/images/logos/github-badge.webp'
import netlify from '../assets/images/logos/netlify-badge.webp'
import heroku from '../assets/images/logos/heroku-badge.webp'
import wordpress from '../assets/images/logos/wordpress-badge.webp'
import postgre from '../assets/images/logos/postgresql-badge.webp'



function Skills() {
    return (
        <div className="section container-fluid w-75 text-center pb-5" id="skill-section">
        <h1>Skills</h1>
        <div className="d-flex flex-wrap justify-content-evenly">
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={html} alt="logo"/>
                <p>HTML5</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={css} alt="logo"/>
                <p>CSS3</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={js} alt="logo"/>
                <p>JavaScript</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={ts} alt="logo"/>
                <p>TypeScript</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={bs} alt="logo"/>
                <p>Bootstrap</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={handlebars} alt="logo"/>
                <p>Handlebars</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={reactLogo} alt="logo"/>
                <p>React.js</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={angular} alt="logo"/>
                <p>Angular</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={mysql} alt="logo"/>
                <p>MySQL</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={postgre} alt="logo"/>
                <p>PostgreSQL</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={mongodb} alt="logo"/>
                <p>MongoDB</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={mongoose} alt="logo"/>
                <p>Mongoose</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={nodejs} alt="logo"/>
                <p>Node.js</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={expressjs} alt="logo"/>
                <p>Express.js</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={postman} alt="logo"/>
                <p>Postman</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={jest} alt="logo"/>
                <p>Jest</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={figma} alt="logo"/>
                <p>Figma</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={git} alt="logo"/>
                <p>Git</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={github} alt="logo"/>
                <p>GitHub</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={netlify} alt="logo"/>
                <p>Netlify</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={heroku} alt="logo"/>
                <p>Heroku</p>
            </div>
            <div className="skill-item col-6 col-md-3 pt-5 pt-sm-5 text-center">
                <img src={wordpress} alt="logo"/>
                <p>WordPress</p>
            </div>


        </div>
        </div>
    );
}

export default Skills;