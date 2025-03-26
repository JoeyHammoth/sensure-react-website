import { createLazyRoute } from "@tanstack/react-router";
import SectionOne from "../Sections/SectionOne.jsx";
import SectionTwo from "../Sections/SectionTwo.jsx";
import SectionThree from "../Sections/SectionThree.jsx";
import SectionFour from "../Sections/SectionFour.jsx";
import SectionFive from "../Sections/SectionFive.jsx";
import Intro from "../Miscellaneous/Intro.jsx";

export const Route = createLazyRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index-container">
      <Intro className="introduction" />
      <div className="white-bg">
        <div className="body">
          <div className="header-gap"></div>
          <SectionOne className="section-one intersect:motion-preset-fade" />
        </div>
        <img
          className="image-one motion-preset-expand"
          src="https://d3bhvpql1mmbm1.cloudfront.net/img13.png"
          alt="Doctor"
        />
        <div className="spacer waves lowish-margin"></div>
      </div>
      <div className="grey-bg">
        <div className="body">
          <SectionTwo className="intersect:motion-preset-fade" />
        </div>
      </div>
      <div className="spacer waves-rev"></div>
      <div className="white-bg">
        <div className="body">
          <SectionThree className="intersect:motion-preset-fade" />
        </div>
      </div>
      <div className="spacer-crop waves-cropped"></div>
      <div className="grey-bg">
        <div className="body">
          <SectionFour className="intersect:motion-preset-fade" />
        </div>
      </div>
      <div className="spacer waves-rev"></div>
      <div className="white-bg">
        <div className="body">
          <SectionFive className="intersect:motion-preset-fade" />
        </div>
      </div>
    </div>
  );
}
