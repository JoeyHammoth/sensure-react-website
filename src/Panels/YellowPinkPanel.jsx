// Standard pink-yellow panel display element with title and body text as props

import "./YellowPinkPanel.css";

const YellowPinkPanel = function ({ title, body }) {
    return (
        <div className="yellow-pink-panel">
            <div className="panel-title">{title}</div>
            <div className="panel-content">{body}</div>
        </div>
    )
}

export default YellowPinkPanel;