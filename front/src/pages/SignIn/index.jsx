import React, {useEffect, useState} from "react";
import {userDataLog} from "../../fetchUser";
import {useDispatch, useSelector} from "react-redux";
import {updateToken} from "../../redux";
import {useNavigate} from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import {RememberUserSession} from "../../RememberUserSession";

export default function SignIn() {
    const [emailLog, setEmailLog] = useState();
    const [passwordLog, setPasswordLog] = useState();
    const [errorMessage, setErrorMessage] = useState(false)
    const [remember, setRemember] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = useSelector(state => state.token)

    useEffect(() => {
        if (token) {
            return navigate("/user")
        }
    })

    function handleSubmit(event) {
        event.preventDefault();
        setErrorMessage(false)
        userDataLog(emailLog, passwordLog)
            .then(function (resultatApi) {
                dispatch(updateToken(resultatApi.body.token))
                if(remember) {
                    localStorage.setItem('token', resultatApi.body.token)
                }
                navigate('/user', {replace: true});
            })
            .catch((error) => {
                console.error(error)
                setErrorMessage(true)
            })
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {errorMessage && <ErrorMessage errorMessage="User not found in database"/>}
                <form method="post" id="form-user-connect" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" name="username" id="username"
                                                                         onChange={e => setEmailLog(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" name="password" id="password"
                                                                         onChange={e => setPasswordLog(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input name="rememberme"  type="checkbox" id="remember-me" onChange={e => setRemember(e.target.checked) }/><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}
