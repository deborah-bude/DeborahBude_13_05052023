import logo from "../assets/argentBankLogo.png";
import { NavLink, Link } from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isUserAuthenticatedSelector, updateToken, userName} from "../redux";
import {RememberUserSession} from "../RememberUserSession";
import {userDataProfile} from "../fetchUser";

export default function Header() {
    const isUserAuthenticated = useSelector(isUserAuthenticatedSelector)
    const userFirstName = useSelector(state => state.userName.firstName)
    const dispatch = useDispatch()
    //const tokenStorage = localStorage.getItem('token')
    /*useEffect(() => {
        if (!tokenStorage) {
            return
        }
        dispatch(updateToken(tokenStorage))
        userDataProfile(tokenStorage).then(function (resultatApi) {
            const user = {
                firstName: resultatApi.body.firstName,
                lastName: resultatApi.body.lastName
            }
            dispatch(userName(user))
        })
            .catch((error) => {
                console.error(error)
            })
    }, [])*/
    useEffect(() => {
        RememberUserSession(dispatch)
    }, [])

    function logOut() {
        dispatch(updateToken(null))
        dispatch(userName({ firstName: null, lastName: null}))
        localStorage.removeItem('token')
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isUserAuthenticated ?
                    <>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            {userFirstName}
                        </NavLink>
                        <NavLink className="main-nav-item" to="/sign-in" onClick={logOut}>
                            <i className="fa fa-user-circle"></i>
                            Sign out
                        </NavLink>
                    </>
                    :
                        <NavLink className="main-nav-item" to="/sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                }

            </div>
        </nav>
    );
}
