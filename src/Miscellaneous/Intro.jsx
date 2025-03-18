// Display element representing the short intro animation for the website

import { useEffect, useState } from "react";
import "./Intro.css";

const Intro = function () {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem("animationPlayed")) {
            document.body.style.position = "fixed";
            setTimeout(() => {
                document.body.style.position = "";
                const introPanel = document.querySelector(".intro");
                if (introPanel) {
                    introPanel.style.opacity = 0;
                    setTimeout(() => {
                        introPanel.style.zIndex = -1;
                        setShouldRender(false);
                    }, 1000);
                }
            }, 3000);
            sessionStorage.setItem("animationPlayed", "true");
        } else {
            // If animation has played, don't render the component at all.
            setShouldRender(false);
        }
    }, []);

    if (!shouldRender) return null;

    return (
        <div className="intro">
            <object className="logo" type="image/svg+xml" data="/SVG/white-logo.svg"></object>
        </div>
    );
};

export default Intro;