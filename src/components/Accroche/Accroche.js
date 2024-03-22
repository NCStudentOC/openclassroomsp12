


import React, { useEffect, useState } from 'react';

export default function Accroche() {
    const text = "Passionné par la création d' expériences web immersives et interactives, je transforme les idées en réalités numériques avec élégance et efficacité.";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, 60); // ajustez la vitesse ici
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="point_accueil">
            <div className='accroche'>
                <div className='centered'>
                    {text.slice(0, index)}
                </div>
            </div>
        </div>
    );
}