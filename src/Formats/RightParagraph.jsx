// A right paragraph section where main text is on the left and image is on the right

import "./RightParagraph.css";

const RightParagraph = function ({ title, paragraph, img, alt }) {
    return (
        <div className="RightParagraph">
            <div className="left-section intersect-once intersect:motion-preset-pop motion-duration-1000">
                <img src={img} alt={alt} />
            </div>
            <div className="right-section">
                <div className="right-section-title intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-0">{title}</div>
                <div className="right-section-paragraph intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-100">{paragraph}</div>
            </div>
        </div>
    );
}

export default RightParagraph;