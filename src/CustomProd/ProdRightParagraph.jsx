// A right paragraph section where main text is on the left and image is on the right

import "./ProdRightParagraph.css";

const ProdRightParagraph = function ({ img, alt }) {
  return (
    <div className="RightParagraph">
      <div className="left-section intersect-once intersect:motion-preset-pop motion-duration-1000">
        <img src={img} alt={alt} />
      </div>
      <div className="right-section-prod">
        <div className="right-par-title-area">
          <div className="right-par-section-prod-title intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-0">
            🩺 The Simulated Model
          </div>
          <div className="right-par-section-prod-subtitle intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-100">
            Designed for Realism, Built for Learning—A Nimble, Effective
            Training Model
          </div>
        </div>
        <div className="right-section-prod-paragraph intersect-once intersect:motion-preset-slide-left motion-duration-1000 motion-delay-200">
          Built to complement the sound-enabled hardware, it provides a
          realistic, repeatable environment for hands-on practice and
          performance tracking.
        </div>
      </div>
    </div>
  );
};

export default ProdRightParagraph;
