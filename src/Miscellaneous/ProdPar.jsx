import "./ProdPar.css";

const ProdPar = function ({ title, description }) {
  return (
    <div className="prod-par-content">
      <div className="prod-par-title">{title}</div>
      <div className="prod-par-description">{description}</div>
      <div className="prod-par-line"></div>
    </div>
  );
};

export default ProdPar;
