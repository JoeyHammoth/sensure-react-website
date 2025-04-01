import "./SectionThree.css";
import Grid from "../Miscellaneous/Grid.jsx";

const SectionThreeProd = function () {
  return (
    <div className="prod-section-three">
      <div className="prod-section-three-content">
        <div className="prod-section-three-main-title">
          The Complete Education Package:
        </div>
        <div className="prod-section-three-subtitle">
          A Holistic Learning Solution—Bringing Sound, Simulation, and Smart
          Training Together.
        </div>
        <div className="prod-section-three-par">
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
