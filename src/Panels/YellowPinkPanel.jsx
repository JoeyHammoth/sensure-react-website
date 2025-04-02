// Standard pink-yellow panel display element with title and body text as props

import "./YellowPinkPanel.css";

const YellowPinkPanel = function ({ title, body }) {
  return (
    <div className="yellow-pink-panel">
      <div className="panel-title intersect-once intersect:motion-preset-bounce motion-delay-0">
        {title}
      </div>
      <div className="panel-content intersect-once intersect:motion-preset-bounce motion-delay-100">
        {body}
      </div>
    </div>
  );
};

export default YellowPinkPanel;
