
import React, { useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';

const LinkComponent = ({ to, children, color, active, setActiveLink }) => {
    const handleClick = useCallback(() => {
        setActiveLink(to.substring(1)); // Extrait l'identifiant du lien sans le #
    }, [to, setActiveLink]);

    return (
        <HashLink
            smooth
            to={to}
            className={`circle-link adapt ${active === to.substring(1) ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            {children}
        </HashLink>
    );
}

export default LinkComponent;
