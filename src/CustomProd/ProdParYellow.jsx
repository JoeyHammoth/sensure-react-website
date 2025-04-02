import "./ProdParYellow.css";

const ProdParYellow = function ({ title, description }) {
  return (
    <div className="prod-par-yellow-content">
      <div className="prod-par-yellow-title">{title}</div>
      <div className="prod-par-yellow-description">{description}</div>
    </div>
  );
};

export default ProdParYellow;
