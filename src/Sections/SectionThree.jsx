import "./SectionThree.css";

import LeftParagraph from "../Formats/LeftParagraph.jsx";
import RightParagraph from "../Formats/RightParagraph.jsx";
import OverlayPanel from "../Advanced/Overlay.jsx";

const SectionThree = function () {
    return (
        <div className="section-three">
            <div className="section-three-title intersect-once intersect:motion-preset-slide-up motion-duration-1000">
                Turning Touch into Teachable Moments—Through Sound
            </div>
            <div className="section-three-body">
                <LeftParagraph titleOne={"Feel precision,"}
                               titleTwo={"hear confidence."}
                               paragraph={"We translate subtle tactile cues into sound, " +
                                   "creating real-time feedback that enhances procedural awareness."}
                               alt={"Needle"} img={"https://d3bhvpql1mmbm1.cloudfront.net/img1.webp"} />
                <RightParagraph titleOne={"A shared language"}
                                titleTwo={"for hands-on expertise."}
                                paragraph={"By providing an objective reference, we enable clearer " +
                                    "communication between trainees and supervisors—bridging experience and learning."}
                                alt={"Needle"} img={"https://d3bhvpql1mmbm1.cloudfront.net/img2.jpg"} />
                <LeftParagraph titleOne={"Faster learning,"}
                               titleTwo={"stronger intuition."}
                               paragraph={"With enhanced clarity and cognitive efficiency, clinicians " +
                                   "refine their skills more intuitively, accelerating mastery " +
                                   "and improving patient outcomes."}
                               alt={"Needle"} img={"https://d3bhvpql1mmbm1.cloudfront.net/img3.png"} />
                <OverlayPanel title={"Seamless to adopt, intuitive to use—enhancing, not replacing, " +
                              "your expertise."}
                              subtitle={"Join a growing community revolutionizing procedural training."}
                              btn={"Learn More"} />
            </div>
        </div>
    );
}

export default SectionThree;