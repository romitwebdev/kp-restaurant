import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { SiUbereats } from "react-icons/si";
import { FaTiktok, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Links = () => {
    return (
        <>
            <div className="link_icons_holder d-flex flex-column align-items-center">
                <a href="#facebook" target="_blank" rel="noreferrer">
                    <FaFacebookSquare className="icon facebook" />
                </a>

                <a href="#glovo" target="_blank" rel="noreferrer">
                    <img
                        src="glovo_logo.jpg"
                        alt=""
                        height={39}
                        width={43}
                        className="img-icon glovo"
                    />
                </a>
                <a href="#bolt" target="_blank" rel="noreferrer">
                    <img
                        src="bolt.png"
                        alt=""
                        height={39}
                        width={43}
                        className="img-icon bolt"
                    />
                </a>
                <a href="#uber" target="_blank" rel="noreferrer">
                    <SiUbereats className="icon uber" />
                </a>
                <a
                    href="https://wa.me/+351920045366"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsWhatsapp className="icon whatsapp" />
                </a>
                <a href="#tiktok" target="_blank" rel="noreferrer">
                    <FaTiktok className="icon tiktok" />
                </a>

                <a href="#insta" target="_blank" rel="noreferrer">
                    <FaInstagramSquare className="icon insta" />
                </a>
            </div>
        </>
    );
};

export default Links;
