import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LeftParagraph from "./Formats/LeftParagraph.jsx";

const App = function () {
    return (
        <StrictMode>
            <div>
                <LeftParagraph title="Welcome to Hell!!!" paragraph="lorem ipsum" alt="Image" img="/Images/img1.webp" />
            </div>
        </StrictMode>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);