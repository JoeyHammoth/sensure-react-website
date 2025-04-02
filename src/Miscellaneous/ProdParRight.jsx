import "./ProdParRight.css";

const ProdParRight = function ({ classname, title, description }) {
  return (
    <div className={classname}>
      <div className="prod-par-right-content intersect-once intersect:motion-preset-wiggle">
        <div className="prod-par-right-title">{title}</div>
        <div className="prod-par-right-description">{description}</div>
      </div>
    </div>
  );
};

export default ProdParRight;
