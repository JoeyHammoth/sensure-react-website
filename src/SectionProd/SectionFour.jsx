import "./SectionFour.css";
import LeftParagraph from "../Formats/LeftParagraph.jsx";
import RightParagraph from "../Formats/RightParagraph.jsx";
import YellowPinkPanel from "../Panels/YellowPinkPanel.jsx";

const ProdSectionFour = function () {
  return (
    <div className="prod-section-four">
      <LeftParagraph
        titleOne="🎤 The Hardware Product:"
        titleTwo="Precision You Can Hear—A Portable Sound-Enabled Training Device for Needle Procedures"
        paragraph="Captures subtle tactile vibrations and feeds real-time audio into the app and curriculum,
        helping trainees and supervisors align on what to feel, when to feel it, and why it matters."
        img=""
        alt=""
      />
      <RightParagraph
        titleOne="🩺 The Simulated Model:"
        titleTwo="Designed for Realism, Built for Learning—A Nimble, Effective Training Model"
        paragraph="Built to complement the sound-enabled hardware, it provides a realistic, repeatable environment
        for hands-on practice and performance tracking."
        img=""
        alt=""
      />
      <LeftParagraph
        titleOne="📱 The App:"
        titleTwo="Train with Sound, Progress with Confidence—Your Pocket Guide to Procedural Mastery"
        paragraph="Integrates sound data, procedural demos, and feedback review to guide skill development
        and enable collaborative learaning anytime, anywhere."
        img=""
        alt=""
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
