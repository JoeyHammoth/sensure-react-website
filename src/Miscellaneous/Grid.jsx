import "./Grid.css";

const Grid = function ({ titleOne, titleTwo, titleThree }) {
  return (
    <div className="grid-content">
      <div className="grid-square-one">
        <div className="grid-square-one-circle">1</div>
        <div className="grid-square-one-title">{titleOne}</div>
      </div>
      <div className="grid-square-two">
        <div className="grid-square-two-circle">2</div>
        <div className="grid-square-two-title">{titleTwo}</div>
      </div>
      <div className="grid-square-three">
        <div className="grid-square-three-circle">3</div>
        <div className="grid-square-three-title">{titleThree}</div>
      </div>
    </div>
  );
};

export default Grid;
