import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfileName, userDataProfile} from "../../fetchUser";
import AccountUser from "../../components/AccountUser";
import {userName} from "../../redux";
import ErrorMessage from "../../components/ErrorMessage";

export default function User() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [editName, setEditName] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [message, setEditMessage] = useState("")

    const dispatch = useDispatch()
    const tokenLog = useSelector(state => state.token)
    const actualFirstName = useSelector(state => state.userName.firstName)
    const actualLastName = useSelector(state => state.userName.lastName)

    useEffect(() => {
        userDataProfile(tokenLog).then(function (resultatApi) {
            setFirstName(resultatApi.body.firstName)
            setLastName(resultatApi.body.lastName)
            const user = {
                firstName: resultatApi.body.firstName,
                lastName: resultatApi.body.lastName
            }
            dispatch(userName(user))
        })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    function editUserName() {
        setEditName(true)
    }

    function handleSubmit (event) {
        event.preventDefault();
        if (firstName === "" || lastName === "") {
            setEditMessage("Firstname and Lastname is required.")
            setErrorMessage(true)
            return;
        }
        if (firstName === actualFirstName && lastName === actualLastName) {
            setEditMessage("You don't change the firstname and the lastname.")
            setErrorMessage(true)
            return;
        }
        editProfileName(tokenLog, firstName, lastName)
        const user = {
            firstName: firstName,
            lastName: lastName
        }
        dispatch(userName(user))
        setEditName(false)
        setErrorMessage(false)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>{!editName && firstName + " " + lastName + " !"}</h1>
                <button className="edit-button" onClick={editUserName}>Edit Name</button>
                {errorMessage && <ErrorMessage errorMessage={message}/>}
                { editName &&
                    <form class="form-user-edit-name" method="post" id="form-user-edit" onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="firstName">FirstName</label>
                            <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">LastName</label>
                            <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required/>
                        </div>
                        <button className="sign-in-button">Edit</button>
                        <a href="#" className="sign-in-button" onClick={() => {
                            setEditName(false);
                            setErrorMessage(false)
                        }}>Cancel</a>
                    </form>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountUser title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance"/>
            <AccountUser title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance"/>
            <AccountUser title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance"/>
        </main>
    );
}