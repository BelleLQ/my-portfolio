import React from 'react';

import Home from '../components/Home'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import ContactMe from '../components/ContactMe'

function HomePage() {
    return (
        <div className="container-fluid p-0">
            <Header/>
            <Home id="home-section"/>
            <AboutMe id="aboutsection"/>
            <Skills/>

            <Portfolio/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default HomePage;