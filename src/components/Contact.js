import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import '../styles/style.css'
export default function Contact() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >Contact</h6>
                        <h1>Contact For Any Query</h1>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-lg-8 bg-white p-5 ">
                            <div className="contact-form " >
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div className="form-row">
                                        <div className="control-group col-sm-6">
                                            <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                                required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group col-sm-6">
                                            <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                                required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                            required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                            required="required"
                                            data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
