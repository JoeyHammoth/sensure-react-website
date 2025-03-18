import "./Green.css";

const GreenButton = function ({ text, link }) {
    return (
        <button type="button" className="green-button" ref={link}>{text}</button>
    )
}

export default GreenButton;
