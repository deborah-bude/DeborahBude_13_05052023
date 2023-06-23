import React from "react";
import {Link} from "react-router-dom";

export default function AccountUser(data) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{data.title}</h3>
                <p className="account-amount">${data.amount}</p>
                <p className="account-amount-description">{data.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Link to="/transaction/1" className="transaction-button">View transactions</Link>
            </div>
        </section>
    );
}
