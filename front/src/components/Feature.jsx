import React from "react";

export default function Feature(data) {
    return (
        <div className="feature-item">
            <img
                src={data.imgSrc}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">{data.title}</h3>
            <p>{data.content}</p>
        </div>
    );
}
