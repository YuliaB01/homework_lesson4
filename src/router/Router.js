import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import {HomePage} from '../components/HomePage';
import {ShopPage} from '../components/ShopPage';
import {ReviewsRouter} from './ReviewsRouter';
import {NavBar} from '../components/NavBar';

export const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path={ROUTES.REVIEWS}>
                    <ReviewsRouter/>
                </Route>
                <Route exact path={ROUTES.HOME}>
                    <HomePage/>
                </Route>
                <Route exact path={ROUTES.SHOP}>
                    <ShopPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};