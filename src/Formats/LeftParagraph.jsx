// A left paragraph section where main text is on the left and image is on the right

import "./LeftParagraph.css";

const LeftParagraph = function ({ title, paragraph, img, alt }) {
    return (
        <div className="LeftParagraph">
            <div className="left-section">
                <div className="left-section-title intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-0">{title}</div>
                <div className="left-section-paragraph intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-100">{paragraph}</div>
            </div>
            <div className="right-section intersect-once intersect:motion-rotate-in-[0.5turn] motion-duration-1000">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default LeftParagraph;