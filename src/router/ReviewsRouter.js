import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import {Review} from '../components/Review';
import {ReviewsPage} from '../components/ReviewsPage';

export const ReviewsRouter = () => {
    const baseUrl = `${ROUTES.REVIEWS}`;
    const reviewUrl = `${baseUrl}/review/:reviewId`;

    return (
        <Switch>
            <Route path={reviewUrl}>
                <Review/>
            </Route>
            <Route path={baseUrl}>
                <ReviewsPage/>
            </Route>
        </Switch>
    );
};