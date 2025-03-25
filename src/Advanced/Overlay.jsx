import "./Overlay.css";
import GreyButton from "../Buttons/Grey.jsx";

const OverlayPanel = function ({ title, subtitle, link, btn }) {
    return (
        <div className="OverlayPanel">
            <div className="overlay-left">
                <div className="overlay-panel-title intersect-once intersect:motion-preset-shake motion-duration-1000 motion-delay-0">{title}</div>
                <div className="overlay-panel-subtitle intersect-once intersect:motion-preset-shake motion-duration-1000 motion-delay-200">{subtitle}</div>
                <GreyButton link={link} text={btn} />
            </div>
            <img src="/Images/img6.png" alt="Needle Image" className="masked-img-one"/>
            <img src="/Images/img7.png" alt="Needle Image" className="masked-img-two"/>
        </div>
    );
}

export default OverlayPanel;