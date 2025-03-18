/*
* The main root of the Sensure website project.
*
*
* */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Intro from "./Miscellaneous/Intro.jsx";
import Header from "./Miscellaneous/Header.jsx";
import OverlayPanel from "./Advanced/Overlay.jsx";
import Reviews from "./Miscellaneous/Reviews.jsx";

import "./App.css";

const App = function () {
    return (
        <StrictMode>
            <div className="main-container">
                <Intro />
                <Header />
                <div className="body">
                    <div className="header-gap"></div>
                    <OverlayPanel />
                    <Reviews />
                </div>
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);