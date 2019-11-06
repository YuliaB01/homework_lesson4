import React from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';
import {ROUTES} from '../router/routes';

export const NavBar = () => {
    const route = useRouteMatch(`${ROUTES.REVIEWS}/review`);

    return route && route.url ? null : (
        <div className="tabs is-centered">
            <ul>
                <li><NavLink exact to={ROUTES.HOME} activeClassName='isActive'>Home page</NavLink></li>
                <li><NavLink to={ROUTES.SHOP} activeClassName='isActive'>Shop</NavLink></li>
                <li><NavLink to={ROUTES.REVIEWS} activeClassName='isActive'>Reviews</NavLink></li>
            </ul>
        </div>
    );
};