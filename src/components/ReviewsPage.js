import React, {useEffect, useRef} from 'react';
import {ReviewsList} from './ReviewsList';
import {useReviewsHook} from '../hooks/useReviewsHook';
import {ReviewInput} from './ReviewInput';

export const ReviewsPage = () => {
    const {reviews, onAdd} = useReviewsHook();
    const textInput = useRef();

    useEffect(() => textInput.current.focus(), []);

    return (
        <div className='reviewsWrapper'>
            <div className="header">
                <h4>Leave your review</h4>
                <ReviewInput onAdd={onAdd} ref={textInput}/>
            </div>
            <div className="reviewsContent">
                <h4 className="reviewsHeader">Reviews List:</h4>
                <ReviewsList {...{reviews}}/>
            </div>
        </div>
    );
};