import React from 'react';
import logo from "../../Images/Icons/logo.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-white footer bg-color mt-5">
            <div className="pt-5 d-flex justify-content-between align-items-center">
                <div>
                    <img className="footer-icon ps-5" src={logo} alt='' />
                </div>
                <div className="text-start">
                    <p>About delivery</p>
                    <p>Read the terms and conditions</p>
                    <p>Sign up to deliver</p>
                    <p>Add your products</p>
                </div>
                <div className="text-start pe-5">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all branches</p>
                </div>
            </div>
            <div className="pt-5 d-flex justify-content-between align-items-center">
                <div className="text-start">
                    <p className="ps-5">Copyright © 2021 delivery-solutions.com</p>
                </div>
                <div className="flex-row text-start pe-3 d-flex justify-content-around">
                    <p className="mx-4"><i className="fab fa-facebook-square"></i></p>
                    <p className="mx-4"><i className="fab fa-whatsapp"></i></p>
                    <p className="mx-4"><i className="fab fa-google-play"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;