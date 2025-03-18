// A left paragraph section where main text is on the left and image is on the right

import "./LeftParagraph.css";

const LeftParagraph = function ({ title, paragraph, img, alt }) {
    return (
        <div className="LeftParagraph">
            <div className="left-section">
                <div className="left-section-title">{title}</div>
                <div className="left-section-paragraph">{paragraph}</div>
            </div>
            <div className="right-section">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default LeftParagraph;