// Display panel that represents a collection of review blocks

import "./Reviews.css";

import Review from "./Review";

const Reviews = function () {
    return (
        <div className="reviews">
            <Review className="review-1" color="#FFB6C1" />
            <Review className="review-2" color="#8EC8E8" />
            <Review className="review-3" color="#FFB6C1" />
        </div>
    );
}

export default Reviews;