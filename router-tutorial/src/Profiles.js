import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/jinsj1">jinsj1</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                exect 
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <WithRouterSample />
        </div>
    );
};

export default Profiles;