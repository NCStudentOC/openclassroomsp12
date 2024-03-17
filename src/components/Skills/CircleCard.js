import React, { useState } from 'react';


export default function CircleCard({ image, titre, id, details }) {
    const [hover, setHover] = useState(false);
    return (
        <div
            className="circle-container"
            key={id}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            <img className="circle-round" src={image} alt={titre} />
            <div className="title">{titre}</div>
            {hover && (
                <div className="hover-container">
                    <div className="hover-circle">
                        <div className="hover-title">{details}</div>
                    </div>
                </div>
            )}
        </div>
    )
}



