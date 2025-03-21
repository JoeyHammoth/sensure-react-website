// Standard blue-pink panel display element with title and body text as props

import "./BluePanel.css";
import GreyButton from "../Buttons/Grey.jsx";

const BluePanel = function ({ title, body }) {
    return (
        <div className="blue-panel">
            <div className="blue-panel-container">
                <div className="panel-title">{title}</div>
                <GreyButton text="See How" />
            </div>
            <div className="panel-content">{body}</div>
        </div>
    )
}

export default BluePanel;