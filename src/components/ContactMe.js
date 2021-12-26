import React from 'react'
import {IoPaperPlaneOutline} from "react-icons/io5";
import {AiOutlineMail} from "react-icons/ai";

function ContactMe() {
    return (
        <div className="section container-fluid w-75 text-center pb-5" id="contact-me-section">
            <h1>Contact Me</h1>
            <p>Let's get in touch!</p>
            <div className="row">
                <div className="col-12 col-md-4 row d-flex align-items-start pt-5">
                        <div className="col-10 row text-start">
                            <p className="contact-me-email"><AiOutlineMail/> Email</p>
                            <p className="smaller-text">yliao39@myseneca.ca</p>
                    </div>
                </div>
                <div className="col-12 col-md-8 py-5">
                <form className="row g-3"
                    action="https://formspree.io/f/xgedvenk"
                    method="POST">
                    <div className="form-floating col-md-6">
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name here"/>
                            <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating col-md-6">
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name here"/>
                            <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating col-md-12">
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here"
                                  id="message" name="message"></textarea>
                        <label htmlFor="floatingTextarea">Message</label>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-dark">Send Me a Message <IoPaperPlaneOutline/></button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;