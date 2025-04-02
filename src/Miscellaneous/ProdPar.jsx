import "./ProdPar.css";

const ProdPar = function ({ classname, title, description }) {
  return (
    <div className={classname}>
      <div className="prod-par-content">
        <div className="prod-par-title">{title}</div>
        <div className="prod-par-description">{description}</div>
      </div>
    </div>
  );
};

export default ProdPar;
