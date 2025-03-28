// Standard blue-yellow panel display element with title and body text as props

import "./YellowPanel.css";

const YellowPanel = function ({ title, body }) {
    return (
        <div className="yellow-panel">
            <div className="panel-title">{title}</div>
            <div className="panel-content">{body}</div>
        </div>
    )
}

export default YellowPanel;