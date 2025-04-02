import "./SectionFour.css";
import YellowPinkPanel from "../Panels/YellowPinkPanel.jsx";
import ProdLeftParagraph from "../CustomProd/ProdLeftParagraph.jsx";
import ProdRightParagraph from "../CustomProd/ProdRightParagraph.jsx";
import ProdLeftParagraphTwo from "../CustomProd/ProdLeftParagraphTwo.jsx";

const ProdSectionFour = function () {
  return (
    <div className="prod-section-four">
      <ProdLeftParagraph
        img="https://d3bhvpql1mmbm1.cloudfront.net/img1.webp"
        alt="needle"
      />
      <ProdRightParagraph
        alt="needle"
        img="https://d3bhvpql1mmbm1.cloudfront.net/img2.jpg"
      />
      <ProdLeftParagraphTwo
        img="https://d3bhvpql1mmbm1.cloudfront.net/img3.png"
        alt="needle"
      />
      <YellowPinkPanel
        title="Shape the Future of Procedural Training—Join Our Study, Share Your Expertise."
        body="We’re building a curriculum shaped by real clinicians—designed around the tactile
        cues that matter most in practice. Through our upcoming study, trainees and supervisors
        can contribute their insights, refine learning targets, and help shape the future of
        procedural education.Integrates sound data, procedural demos, and feedback review to
        guide skill development and enable collaborative learning anytime, anywhere."
      />
    </div>
  );
};

export default ProdSectionFour;
