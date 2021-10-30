import React from 'react';
import { Redirect, Route } from 'react-router';
import firebaseInit from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

firebaseInit();

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;