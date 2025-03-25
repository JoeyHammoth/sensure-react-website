// A left paragraph section where main text is on the left and image is on the right

import "./LeftParagraph.css";

const LeftParagraph = function ({ titleOne, titleTwo, paragraph, img, alt }) {
    return (
        <div className="LeftParagraph">
            <div className="left-par-left-area">
                <div className="left-par-title-area">
                    <div className="intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-0">{titleOne}</div>
                    <div className="intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-100">{titleTwo}</div>
                </div>
                <div className="left-par-content-area intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-200">{paragraph}</div>
            </div>
            <div className="left-par-right-img-area intersect-once intersect:motion-rotate-in-[0.5turn] motion-duration-1000">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default LeftParagraph;