import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import BluePanel from "./Panels/BluePanel.jsx";
import YellowPanel from "./Panels/YellowPanel.jsx";
import YellowPanelItem from "./Panels/YellowPinkPanel.jsx";
import GreenButton from "./Buttons/Green.jsx";
import GreyButton from "./Buttons/Grey.jsx";
import BlackButton from "./Buttons/Black.jsx";
import SlidePanel from "./Advanced/Slide.jsx";

const App = function () {
    return (
        <StrictMode>
            <div>
                <h1>Placeholder</h1>
                <BluePanel title="Hello" body="placeholder" />
                <YellowPanel title="Hello" body="placeholder" />
                <YellowPanelItem title="Hello" body="placeholder" />
                <GreenButton text="Hello" />
                <GreyButton text="Hello" />
                <BlackButton text="Hello" />
                <SlidePanel title="Hello" subtitle="placeholder" btn="Learn more" />
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);