import "./SectionOne.css";

const SectionOne = function ({ img, alt }) {
    return (
        <div className="section-one">
            <div className="left">
                <div className="title">Feel precision. Hear confidence. Master touch.</div>
                <div className="content">Refine the way skills are taught—and mastered.
                    Join us in transforming clinical training</div>
            </div>
            <div className="right">
                <img src={img} alt={alt} />
            </div>
        </div>
    );
}

export default SectionOne;