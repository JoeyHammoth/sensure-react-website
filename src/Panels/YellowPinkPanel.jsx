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