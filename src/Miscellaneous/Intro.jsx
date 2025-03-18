// Display element representing the short intro animation for the website

import { useEffect } from "react";
import "./Intro.css";

const Intro = function () {
    useEffect(() => {
        const introPanel = document.querySelector(".intro");
        if (!sessionStorage.getItem("animationPlayed")) {
            document.body.style.position = "fixed";
            setTimeout(() => {
                document.body.style.position = "";
                introPanel.style.opacity = 0;
                setTimeout(() => {
                    introPanel.style.zIndex = -1;
                }, 1000);
            }, 3000);
            sessionStorage.setItem("animationPlayed", "true");
        } else {
            document.body.style.position = "";
            introPanel.style.opacity = 0;
            introPanel.style.zIndex = -1;
        }
    }, []);

    return (
        <div className="intro">
            <object className="logo" type="image/svg+xml" data="/SVG/white-logo.svg"></object>
        </div>
    );
};

export default Intro;