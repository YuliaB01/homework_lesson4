import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import T from 'prop-types';

export const ReviewsList = ({reviews}) => {
    const {pathname} = useLocation();

    return (
        <ul className="reviewList">
            {reviews && reviews.map((review, i) =>
                <li className="reviewItem" key={review.id}>
                    <span>{i + 1}. </span>
                    <Link to={`${pathname}/review/${review.id}`} className="reviewLink">
                        {review.text}
                    </Link>
                </li>
            )}
        </ul>
    );
};

ReviewsList.propTypes = {
    reviews: T.arrayOf(T.shape({
        id: T.string.isRequired,
        text: T.string.isRequired
    }))
};