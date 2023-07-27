import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <>
            <h1 className="sub_menu_header one">Slide To See The Menus</h1>
            <Carousel className="carosoule_holder w-100">
                <Carousel.Item interval={2000}>
                    <img src="1.jpeg" alt="" className="d-block" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="2.jpeg" alt="" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src="3.jpeg" alt="" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img src="4.jpeg" alt="" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="5.jpeg" alt="" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;
