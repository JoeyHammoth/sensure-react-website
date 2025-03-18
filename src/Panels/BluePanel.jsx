// Standard blue-pink panel display element with title and body text as props

import "./BluePanel.css";

const BluePanel = function ({ title, body }) {
    return (
        <div className="blue-panel">
            <div className="panel-title">{title}</div>
            <div className="panel-content">{body}</div>
        </div>
    )
}

export default BluePanel;