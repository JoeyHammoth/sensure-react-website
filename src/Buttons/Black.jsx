// A black button display element

import "./Black.css";

const BlackButton = function ({ text, link }) {
    return (
        <button type="button" className="black-button" ref={link}>{text}</button>
    )
}

export default BlackButton;