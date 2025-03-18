// A single review block display element

import "./Review.css";

const Review = function ({ content, name, title, img, color }) {
    return (
        <div className="review">
            <div className="review-block" style={{ backgroundColor: color }}>
                <div className="review-block-title">{content}</div>
                <div className="review-block-profile">
                    <img src={img} alt="Doctor Image"/>
                    <div className="review-block-text">
                        <div className="review-block-name">{name}</div>
                        <div className="review-block-role">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;