import React from "react";
import Feature from "../../components/Feature";
import iconChat from "../../assets/icon-chat.png"
import iconMoney from "../../assets/icon-money.png"
import iconSecurity from "../../assets/icon-security.png"
import {updateToken} from "../../redux";
import {useDispatch} from "react-redux";

export default function Home() {
    const tokenStorage = localStorage.getItem('token')
    const dispatch = useDispatch()
    console.log(tokenStorage)
    if (tokenStorage) {
        dispatch(updateToken(tokenStorage))
    }

    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature
                    title="You are our #1 priority"
                    content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
                    imgSrc={iconChat} />
                <Feature
                    title="More savings means higher rates"
                    content="The more you save with us, the higher your interest rate will be!"
                    imgSrc={iconMoney} />
                <Feature
                    title="Security you can trust"
                    content="We use top of the line encryption to make sure your data and money
            is always safe."
                    imgSrc={iconSecurity} />
            </section>
        </main>
    );
}