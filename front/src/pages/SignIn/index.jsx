import React, { useState } from "react";
import {userDataLog} from "../../fetchUser";
import {useDispatch} from "react-redux";
import {updateToken} from "../../redux";
import {useNavigate} from "react-router-dom";

export default function SignIn(dataUser) {
    const [emailLog, setEmailLog] = useState();
    const [passwordLog, setPasswordLog] = useState();
    const [errorMessage, setErrorMessage] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();
    function handleSubmit (event) {
        event.preventDefault();
        userDataLog(emailLog, passwordLog).then(function (resultatApi) {
            if (resultatApi.status === 200) {
                dispatch(updateToken(resultatApi.body.token))
                setErrorMessage(false)
                navigate('/user', {replace: true});
            } else {
                setErrorMessage(true)
            }
        })
    }

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                { errorMessage && <p>Erreur : L'utilisateur n'a pas été trouvé</p> }
                <form method="post" id="form-user-connect" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" onChange={e => setEmailLog(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={e => setPasswordLog(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}