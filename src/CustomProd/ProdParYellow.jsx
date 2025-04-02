import "./ProdParYellow.css";

const ProdParYellow = function ({ classname, title, description }) {
  return (
    <div className={classname}>
      <div className="prod-par-yellow-content intersect-once intersect:motion-preset-wiggle">
        <div className="prod-par-yellow-title">{title}</div>
        <div className="prod-par-yellow-description">{description}</div>
      </div>
    </div>
  );
};

export default ProdParYellow;
