import "./SectionTwo.css";
import ProdPar from "../Miscellaneous/ProdPar.jsx";
import ProdParYellow from "../CustomProd/ProdParYellow.jsx";
import ProdParRight from "../Miscellaneous/ProdParRight.jsx";

const SectionTwoProd = function () {
  return (
    <div className="prod-section-two">
      <ProdPar
        className="prod-par-component-one"
        title="Ergonomic and Compact Design"
        description="Engineered for ease of use, our device attaches seamlessly to standard needles,
        providing consistent performance without disrupting clinical workflows."
      />
      <ProdParYellow
        className="prod-par-component-two"
        title="Customisable Trainig & Procedural Insights"
        description="Engineered for ease of use, our device attaches seamlessly to standard needles,
        providing consistent performance without disrupting clinical workflows."
      />
      <ProdParRight
        className="prod-par-component-three"
        title="Your Privacy, Guaranteed"
        description="We prioritize your data. Every interaction is encrypted and stored securely,
        ensuring your procedural feedback and analytics remain confidential and protected."
      />
    </div>
  );
};

export default SectionTwoProd;
