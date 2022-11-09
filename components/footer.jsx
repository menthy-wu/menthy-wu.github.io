import React from "react";
import {FaRegEnvelope, FaInstagram, FaLinkedin, FaGithub}from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
        <a><FaRegEnvelope className="text-6xl" /></a>
        <a><FaInstagram className="text-6xl" /></a>
        <a><FaLinkedin className="text-6xl" /></a>
        <a><FaGithub className="text-6xl" /></a>
    </footer>
    );
}
export default Footer;