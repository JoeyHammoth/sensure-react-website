// A right paragraph section where main text is on the left and image is on the right

import "./RightParagraph.css";

const RightParagraph = function ({ title, paragraph, img, alt }) {
    return (
        <div className="RightParagraph">
            <div className="left-section">
                <img src={img} alt={alt} />
            </div>
            <div className="right-section">
                <div className="right-section-title">{title}</div>
                <div className="right-section-paragraph">{paragraph}</div>
            </div>
        </div>
    )
}

export default RightParagraph;