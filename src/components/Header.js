import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { HashLink} from 'react-router-hash-link';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div className="container-fluid">
                    <a className="navbar-brand font-title">Belle</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <HashLink to="#home-section" className="nav-link">Home</HashLink>
                            <HashLink className="nav-link" to="#about-section">About Me</HashLink>
                            <HashLink className="nav-link" to="#skill-section">Skills</HashLink>
                            <HashLink className="nav-link" to="#portfolio-section">Portfolio</HashLink>
                            <HashLink className="nav-link" to="#contact-me-section">Contact Me</HashLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
