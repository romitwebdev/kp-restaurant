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

import ContextProvider from "./ContextProvider";
import CompHolder from "./CompHolder";

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <CompHolder />
            </div>
        </ContextProvider>
    );
}

export default App;
