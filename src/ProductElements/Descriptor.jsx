import "./Descriptor.css";

const Descriptor = function ({ title, description }) {
  return (
    <div className="descriptor-container">
      <div className="descriptor-title">{title}</div>
      <div className="descriptor-description">{description}</div>
      <div className="descriptor-line"></div>
    </div>
  );
};

export default Descriptor;
