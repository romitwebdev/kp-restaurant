import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
    return (
        <>
            <Container>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.4795319111035!2d-8.91173032198822!3d38.62818663186789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1940b84165521f%3A0xe3f901f7699c7bee!2sR.%20Infante%20Dom%20Henrique%20120c%2C%202955-196%20Pinhal%20Novo!5e0!3m2!1sen!2spt!4v1689180120978!5m2!1sen!2spt"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                ></iframe>
            </Container>
        </>
    );
};

export default Map;
