import {useState, useEffect} from 'react';
import uuid from 'uuid/v4';

export const initialState = () => {
    const parsedReviewsFromStorage = (JSON.parse(localStorage.getItem('reviewsList')));

    return parsedReviewsFromStorage || [];
};

export const useReviewsHook = () => {
    const [reviews, setReviews] = useState(initialState());

    const onAdd = text => {
        setReviews([
                ...reviews,
                {
                    id: uuid(),
                    text: text
                }
            ]
        )
    };

    useEffect(() => {
        const stringifiedReviews = JSON.stringify(reviews);
        localStorage.setItem('reviewsList', stringifiedReviews);
    }, [reviews]);

    return {
        reviews,
        onAdd
    }
};