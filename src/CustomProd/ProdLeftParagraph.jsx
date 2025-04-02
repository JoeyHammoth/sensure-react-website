// A left paragraph section where main text is on the left and image is on the right

import "./ProdLeftParagraph.css";

const ProdLeftParagraph = function ({ img, alt }) {
  return (
    <div className="LeftParagraph">
      <div className="left-par-prod-one-left-area">
        <div className="left-par-prod-one-title-area">
          <div className="left-par-prod-one-title intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-0">
            🎤 The Hardware Product
          </div>
          <div className="left-par-prod-one-subtitle intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-100">
            Precision You Can Hear—A Portable Sound-Enabled Training Device for
            Needle Procedures
          </div>
        </div>
        <div className="left-par-prod-one-content-area intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-200">
          Captures subtle tactile vibrations and feeds real-time audio into the
          app and curriculum, helping trainees and supervisors align on what to
          feel, when to feel it, and why it matters.
        </div>
      </div>
      <div className="left-par-prod-one-right-img-area intersect-once intersect:motion-rotate-in-[0.5turn] motion-duration-1000">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default ProdLeftParagraph;
