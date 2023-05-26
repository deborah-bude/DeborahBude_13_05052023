import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {userData} from "../../fetchUser";

export default function SignIn(dataUser) {
    const [emailLog, setEmailLog] = useState();
    const [passwordLog, setPasswordLog] = useState();
    const [token, setToken] = useState()

    // useEffect(() => {
    //     setToken(userData("tony@stark.com", "password123"))
    //     // setToken(userData(emailLog, passwordLog))
    //     console.log(token)
    // }, []);

    function handleSubmit (event) {
        event.preventDefault();
        setToken(userData(emailLog, passwordLog))
        console.log(token)

        // return <Navigate to="/user" replace={true} />
    }

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
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