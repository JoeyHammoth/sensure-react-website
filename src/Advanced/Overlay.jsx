import "./Overlay.css";

const OverlayPanel = function ({ title, link, btn }) {
    return (
        <div className="OverlayPanel">
            <div className="overlay-panel-title">{title}</div>
            <button type="button" ref={link}>{btn}</button>
            <img src="/Images/img6.png" alt="Needle Image" className="masked-img-one"/>
            <img src="/Images/img7.png" alt="Needle Image" className="masked-img-two"/>
        </div>
    );
}

export default OverlayPanel;