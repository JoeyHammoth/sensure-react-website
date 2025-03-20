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
import SectionTwo from "./Sections/SectionTwo.jsx";
import SectionThree from "./Sections/SectionThree.jsx";
import SectionFour from "./Sections/SectionFour.jsx";
import SectionFive from "./Sections/SectionFive.jsx";
import Footer from "./Miscellaneous/Footer.jsx";

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
                        <SectionTwo />
                    </div>
                </div>
                <div className="spacer waves-rev"></div>
                <div className="white-bg">
                    <div className="body">
                        <SectionThree />
                    </div>
                </div>
                <div className="spacer waves low-margin"></div>
                <div className="grey-bg">
                    <div className="body">
                        <SectionFour />
                    </div>
                </div>
                <div className="spacer waves-rev"></div>
                <div className="white-bg">
                    <div className="body">
                        <SectionFive />
                    </div>
                </div>
                <Footer />
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);