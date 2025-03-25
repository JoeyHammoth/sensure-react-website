// A right paragraph section where main text is on the left and image is on the right

import "./RightParagraph.css";

const RightParagraph = function ({ titleOne, titleTwo, paragraph, img, alt }) {
    return (
        <div className="RightParagraph">
            <div className="left-section intersect-once intersect:motion-preset-pop motion-duration-1000">
                <img src={img} alt={alt} />
            </div>
            <div className="right-section">
                <div className="right-par-title-area">
                    <div className="intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-0">{titleOne}</div>
                    <div className="intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-100">{titleTwo}</div>
                </div>
                <div className="right-section-paragraph intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-200">{paragraph}</div>
            </div>
        </div>
    );
}

export default RightParagraph;