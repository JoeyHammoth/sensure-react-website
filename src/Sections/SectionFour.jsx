import "./SectionFour.css";
import LeftParagraph from "../Formats/LeftParagraph.jsx";
import RightParagraph from "../Formats/RightParagraph.jsx";
import SlidePanel from "../Advanced/Slide.jsx";

const SectionFour = function () {
    return (
        <div className="section-three">
            <div className="section-three-title">
                Your Pocket Guide - Access learning anywhere, anytime
            </div>
            <div className="section-three-body">
                <LeftParagraph title={"Track your learning, step by step."}
                               paragraph={"Explore procedure demos, anatomical insights, " +
                                   "and real-world scenarios to strengthen your understanding."}
                               alt={"Needle"} img={"/public/Images/img1.webp"} />
                <RightParagraph title={"Review, replay, and refine."}
                                paragraph={"Revisit past experiences with replayable feedback, " +
                                    "helping you analyze and improve your technique."}
                                alt={"Needle"} img={"/public/Images/img2.jpg"} />
                <LeftParagraph title={"Connect, compare, and collaborate."}
                               paragraph={"Join a clinician-led community—share insights, benchmark progress, " +
                                   "and co-create better training methods together."}
                               alt={"Needle"} img={"/public/Images/img3.png"} />
                <SlidePanel title={"Your personal guide to mastering procedural " +
                    "skills—built for clinicians, by clinicians."} btn={"Download on iOS & Android"} />
            </div>
        </div>
    );
}

export default SectionFour;