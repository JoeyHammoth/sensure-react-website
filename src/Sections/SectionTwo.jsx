import "./SectionTwo.css";

import BluePanel from "../Panels/BluePanel.jsx";

const SectionTwo = function () {
    return (
        <div className="section-two">
            <div className="section-two-title intersect-once intersect:motion-preset-rebound-right">
                Needle-based procedures demand precision,
                but training methods often leave clinicians
                struggling to develop reliable tactile intuition.
            </div>
            <BluePanel title={"Teach. Train. Transform."}
                       body={" Our intuitive, portable system " +
                           "enables real-time communication of " +
                           "critical tactile cues, helping trainees " +
                           "grasp essential learning targets while " +
                           "allowing supervisors to provide clearer, " +
                           "more effective guidance. The result? Faster " +
                           "learning, improved accuracy, and safer patient care.\n"}
            />
        </div>
    );
}

export default SectionTwo;