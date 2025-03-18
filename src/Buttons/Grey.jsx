// A grey button display element

import "./Grey.css";

const GreyButton = function ({ text, link }) {
    return (
        <button type="button" className="grey-button" ref={link}>{text}</button>
    )
}

export default GreyButton;
