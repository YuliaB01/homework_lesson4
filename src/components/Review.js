import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

export const Review = () => {
    const history = useHistory();
    const {reviewId} = useParams();
    const reviews = JSON.parse(localStorage.getItem('reviewsList'));
    const review = reviews.find(r => r.id === reviewId);

    const onClick = () => history.goBack();

    return (
        <div>
            <button className="button is-white is-info is-inverted" onClick={onClick}>← Back</button>
            <div className="reviewText box">{review.text}</div>
        </div>
    );
};