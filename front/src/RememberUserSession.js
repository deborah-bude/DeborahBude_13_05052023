import React from "react";
import {useDispatch} from "react-redux";
import {updateToken, userName} from "./redux";
import {userDataProfile} from "./fetchUser";

export function RememberUserSession(dispatch) {
    const tokenStorage = localStorage.getItem('token')

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
}