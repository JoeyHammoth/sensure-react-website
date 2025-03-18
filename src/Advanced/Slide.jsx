// A sliding panel display element where images switch automatically or by clicking on them

import { useState, useEffect, useRef } from "react";
import "./Slide.css";

const imgLinks = [
    "/Images/img8.jpg",
    "/Images/img9.jpg",
    "/Images/img10.avif",
];

const SlidePanel = ({ title, subtitle, btn }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const imgRef = useRef(null);

    // Function to smoothly change the image
    const changeImage = (index) => {
        if (index !== currentIndex) {
            setFade(true); // Start fade-out
            setTimeout(() => {
                setCurrentIndex(index);
                setFade(false); // Fade back in
            }, 500); // 500ms matches CSS transition time
        }
    };

    // Function to cycle images when clicking on them
    const handleImageClick = () => {
        changeImage((currentIndex + 1) % imgLinks.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            changeImage((currentIndex + 1) % imgLinks.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="sliding-panel">
            <div className="sliding-panel-left">
                <div className="sliding-panel-subtitle">{subtitle}</div>
                <div className="sliding-panel-title">{title}</div>
                <button type="button">{btn}</button>
            </div>
            <div className="sliding-panel-right">
                <img
                    ref={imgRef}
                    src={imgLinks[currentIndex]}
                    alt="patient"
                    className={`slide-img-one ${fade ? "img-fade-out" : ""}`}
                    onClick={handleImageClick}
                    style={{ cursor: "pointer" }}
                />
                <div className="sliding-panel-dots">
                    {imgLinks.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => changeImage(index)}
                            style={{
                                backgroundColor: currentIndex === index ? "grey" : "white",
                                cursor: "pointer",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                display: "inline-block",
                                margin: "5px",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlidePanel;