import "./SectionTwo.css";
import ProdPar from "../Miscellaneous/ProdPar.jsx";
import ProdParYellow from "../CustomProd/ProdParYellow.jsx";

const SectionTwoProd = function () {
  return (
    <div className="prod-section-two">
      <ProdPar
        title="Ergonomic and Compact Design"
        description="Engineered for ease of use, our device attaches seamlessly to standard needles,
        providing consistent performance without disrupting clinical workflows."
      />
      <ProdParYellow
        title="Customisable Trainig & Procedural Insights"
        description="Engineered for ease of use, our device attaches seamlessly to standard needles,
        providing consistent performance without disrupting clinical workflows."
      />
      <ProdPar
        title="Your Privacy, Guaranteed"
        description="We prioritize your data. Every interaction is encrypted and stored securely,
        ensuring your procedural feedback and analytics remain confidential and protected."
      />
    </div>
  );
};

export default SectionTwoProd;
