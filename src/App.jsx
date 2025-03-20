/*
* The main root of the Sensure website project.
*
*
* */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Intro from "./Miscellaneous/Intro.jsx";
import Header from "./Miscellaneous/Header.jsx";
import SectionOne from "./Sections/SectionOne.jsx";

import "./App.css";

const App = function () {
    return (
        <StrictMode>
            <Intro className="introduction" />
            <div className="main-container">
                <Header />
                <div className="white-bg">
                    <div className="body">
                        <div className="header-gap"></div>
                        <SectionOne className="section-one" />
                    </div>
                </div>
                <img className="image-one" src="/public/Images/img13.png" alt="Doctor" />
                <div className="spacer waves"></div>
                <div className="grey-bg">
                    <div className="body">
                        Hello
                    </div>
                </div>
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);