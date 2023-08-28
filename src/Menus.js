import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Aos from "aos";

const Menus = () => {
    // animation on scroll lib
    useEffect(() => {
        Aos.init({ duration: 2000, once: false, mirror: true });
        Aos.refresh();
    });
    return (
        <>
            <div className="menu_holder" id="menus">
                <h1 className="menu_header border-bottom py-4">Our Menus</h1>
                <div className="img-holder">
                    <Row className="g-2">
                        <Col lg="6" sm="12">
                            {/* <div data-aos="fade-right"> */}
                            <Card className="shadow-lg p-2">
                                <Card.Img
                                    src="kp1.jpg"
                                    loading="lazy"
                                ></Card.Img>
                            </Card>
                            {/* </div> */}
                        </Col>

                        <Col lg="6" sm="12">
                            {/* <div data-aos="fade-left"> */}
                            <Card className="shadow-lg p-2">
                                <Card.Img
                                    src="kp2.jpg"
                                    loading="lazy"
                                ></Card.Img>
                            </Card>
                            {/* </div> */}
                        </Col>

                        <Col lg="6" sm="12">
                            {/* <div data-aos="fade-right"> */}
                            <Card className="shadow-lg p-2">
                                <Card.Img
                                    src="kp3.jpg"
                                    loading="lazy"
                                ></Card.Img>
                            </Card>
                            {/* </div> */}
                        </Col>
                        <Col lg="6" sm="12">
                            {/* <div data-aos="fade-left"> */}
                            <Card className="shadow-lg p-2">
                                <Card.Img
                                    src="kp4.jpg"
                                    loading="lazy"
                                ></Card.Img>
                            </Card>
                            {/* </div> */}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Menus;
