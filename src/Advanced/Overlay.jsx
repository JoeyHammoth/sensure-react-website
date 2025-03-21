import "./Overlay.css";
import GreyButton from "../Buttons/Grey.jsx";

const OverlayPanel = function ({ title, link, btn }) {
    return (
        <div className="OverlayPanel">
            <div className="overlay-left">
                <div className="overlay-panel-title">{title}</div>
                <GreyButton link={link} text={btn} />
            </div>
            <img src="/Images/img6.png" alt="Needle Image" className="masked-img-one"/>
            <img src="/Images/img7.png" alt="Needle Image" className="masked-img-two"/>
        </div>
    );
}

export default OverlayPanel;