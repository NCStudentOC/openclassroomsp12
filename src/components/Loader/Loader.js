import React, { useState, useEffect } from 'react';
import './Loader.scss';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Cela va cacher le loader après 3 secondes
        }, 1800);

        return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
    }, []);

    if (!loading) return null;

    return (
        <div className="container_loader">
            <span className="loader"></span>
        </div>
    );
};

export default Loader;
