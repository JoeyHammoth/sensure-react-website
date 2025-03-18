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