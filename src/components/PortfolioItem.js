import React from 'react'
import {IoArrowForwardSharp} from "react-icons/io5";

function PortfolioItem(screenshot, title, projectType, description, stacks, webUrl, gitUrl) {
    return (
        <div className="carousel-item active" data-bs-interval="10000">
            <img
                className="d-block carousel-image-left"
                src={screenshot}
                alt="First slide"/>

            <div className="carousel-text-right d-block">
                <p className="in-section-title pb-0">{title}</p>
                <p className="pb-4">{projectType}</p>
                <p className="portfolio-work-desc">{description}</p>
                <p className="portfolio-work-desc"><br/>Build with: <br/></p>
                <div className="portfolio-work-tools row">
                    {stacks.map(stack=>{
                        return ( <img className="col-3" src={stack}/>)
                    })}
                </div>
                <a href={webUrl} target="_blank"><button type="button" className="btn btn-dark">Check out website<IoArrowForwardSharp/></button></a>
                <a href={gitUrl} target="_blank"><button type="button" className="btn btn-dark">Check out GitHub<IoArrowForwardSharp/></button></a>
            </div>
        </div>
    );
}

export default PortfolioItem;