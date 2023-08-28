import React, { useEffect } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { ContextFunc } from "./ContextProvider";

const Header = () => {
    const { currentData } = ContextFunc();

    // animation on scroll lib
    useEffect(() => {
        Aos.init({ duration: 2000, once: false, mirror: true });
        Aos.refresh();
    });
    return (
        <>
            <div className="hero" style={{ height: "100vh", width: "100vw" }}>
                <div className="tagline_holder">
                    <div data-aos="fade-down">
                        <h1 className="tagline">
                            Kp Restaurant - {currentData.name}
                        </h1>
                    </div>

                    <div data-aos="fade-left">
                        <h3 className="sub-tagline">
                            Where every bite tells a delicious story
                        </h3>
                    </div>

                    <a href="#menus">
                        <button
                            className="btn_menu btn btn-danger"
                            style={{
                                letterSpacing: "0.1rem",
                                borderWidth: "0.2rem",
                            }}
                        >
                            Menus
                        </button>
                    </a>
                </div>

                <img
                    src="/hero.png"
                    alt=""
                    className="hero_img"
                    // style={{ height: "50%", width: "50%" }}
                    loading="lazy"
                />

                <img
                    src={currentData.imageURL}
                    alt=""
                    className="bg_img"
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default Header;
