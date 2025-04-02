import "./SectionThree.css";
import Grid from "../Miscellaneous/Grid.jsx";

const SectionThreeProd = function () {
  return (
    <div className="prod-section-three">
      <div className="prod-section-three-content">
        <div className="prod-section-three-main-title intersect-once intersect:motion-preset-rebound-right motion-delay-0">
          The Complete Education Package
        </div>
        <div className="prod-section-three-subtitle intersect-once intersect:motion-preset-rebound-right motion-delay-100">
          A Holistic Learning Solution—Bringing Sound, Simulation, and Smart
          Training Together.
        </div>
        <div className="prod-section-three-par intersect-once intersect:motion-preset-rebound-right motion-delay-200">
          Our education package combines sound-enabled hardware, a realistic
          training model, and an interactive learning app to create a unified,
          immersive training experience. Together, they capture, represent, and
          reinforce critical tactile moments—empowering both trainees and
          supervisors to teach, learn, and communicate with greater clarity and
          confidence.
        </div>
      </div>
      <Grid
        titleOne="Needle Clip"
        titleTwo="Model Holder"
        titleThree="Application"
      />
    </div>
  );
};

export default SectionThreeProd;
