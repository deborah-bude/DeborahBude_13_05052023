import React from "react";

export default function ErrorMessage(message) {
    return (
        <div className="error-message">
            <p>{message.errorMessage}</p>
        </div>
    );
}