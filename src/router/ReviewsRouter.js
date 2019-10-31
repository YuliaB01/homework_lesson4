import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import {Review} from '../components/Review';
import {ReviewsPage} from '../components/ReviewsPage';
import {NavBar} from '../components/NavBar';

export const ReviewsRouter = () => {
    const baseUrl = `${ROUTES.REVIEWS}`;
    const reviewUrl = `${baseUrl}/:reviewId`;

    return (
        <Switch>
            <Route path={reviewUrl}>
                <Review/>
            </Route>
            <Route path={baseUrl}>
                <NavBar/>
                <ReviewsPage/>
            </Route>
        </Switch>
    );
};