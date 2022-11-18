import React from "react";
import { FaCircle } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import Project from "./Project";

const Projects = () => {
    return (
        <div className="bg-black w-full justify-center flex min-h-screen">\
            <div className="w-10/12 flex flex-col items-center">
                <div className="text-left font-anton text-10xl text-white w-full">Projects •</div>
                <div className="w-11/12 flex flex-col justify-center">
                    <Row className="items-center justify-between mt-16">
                        <Col md={4}><Project /></Col>
                        <Col md={4}><Project /></Col>
                        <Col md={4}><Project /></Col>
                    </Row>
                    <Row className="items-center justify-between mt-16">
                        <Col md={4}><Project /></Col>
                        <Col md={4}><Project /></Col>
                        <Col md={4}><Project /></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Projects;