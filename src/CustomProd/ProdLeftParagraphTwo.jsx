import "./ProdLeftParagraphTwo.css";

const ProdLeftParagraphTwo = function ({ img, alt }) {
  return (
    <div className="LeftParagraph">
      <div className="left-par-prod-one-left-area">
        <div className="left-par-prod-one-title-area">
          <div className="left-par-prod-one-title intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-0">
            📱 The App
          </div>
          <div className="left-par-prod-one-subtitle intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-100">
            Train with Sound, Progress with Confidence—Your Pocket Guide to
            Procedural Mastery
          </div>
        </div>
        <div className="left-par-prod-one-content-area intersect-once intersect:motion-preset-slide-right motion-duration-1000 motion-delay-200">
          Integrates sound data, procedural demos, and feedback review to guide
          skill development and enable collaborative learning anytime, anywhere.
        </div>
      </div>
      <div className="left-par-prod-one-right-img-area intersect-once intersect:motion-rotate-in-[0.5turn] motion-duration-1000">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default ProdLeftParagraphTwo;
