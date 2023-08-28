import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Menus from "./Menus";
import Map from "./Map";
import FooterComp from "./Footer";
import Links from "./Links";
import { useState } from "react";
import Main from "./Main";
import { ContextFunc } from "./ContextProvider";
import { BiCurrentLocation } from "react-icons/bi";

const CompHolder = () => {
    const {
        data,
        showMainContent,
        setShowMainContent,
        showParts,
        setCurrentData,
        setShowParts,
        currentData,
    } = ContextFunc();

    const handleClick = (obj) => {
        setCurrentData({
            id: obj.id,
            name: obj.name,
            phoneNumber: obj.number,
            location: obj.location,
            imageURL: obj.imageURL,
            mapURL: obj.mapURL,
        });
        setShowParts(!showParts);
        setShowMainContent(!showMainContent);
    };
    console.log(currentData.name, "current data is updated");

    return (
        <>
            {showParts && (
                <div className="main_location_holder">
                    <h1 className="tagline">Kp Restaurant</h1>
                    <h3 className="sub-tagline">
                        Choose our locations <BiCurrentLocation />
                    </h3>
                    <div className="location_button_holder">
                        {showParts
                            ? data &&
                              data.map((dt) => {
                                  return (
                                      <div key={dt.id}>
                                          <button
                                              className="location_btn"
                                              onClick={() => handleClick(dt)}
                                          >
                                              {dt.name}
                                          </button>{" "}
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            )}

            {showMainContent && <Main current={currentData} />}
        </>
    );
};

export default CompHolder;
