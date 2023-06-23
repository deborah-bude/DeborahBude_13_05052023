import {Navigate} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {isUserAuthenticatedSelector} from "./redux";

export const ProtectedRoute = ({redirectPath = '/sign-in', children,}) => {
    const isUserAuthenticated = useSelector(isUserAuthenticatedSelector)

    if (!isUserAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};