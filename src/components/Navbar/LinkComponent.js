import React, { useCallback, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const LinkComponent = ({ to, children, color, active, setActiveLink }) => {
    const extractedId = to.substring(1);

    const handleClick = useCallback(() => {
        console.log('Clic sur le lien:', to);
        setActiveLink(extractedId);
    }, [to, setActiveLink]);

    const isActive = active === extractedId;

    return (
        <HashLink
            smooth
            to={to}
            className={`circle-link adapt ${isActive ? 'active' : ''}`}
            style={{
                backgroundColor: isActive ? '#FFFFFF' : color
            }}
            onClick={handleClick}
        >
            {children}
        </HashLink>
    );
}


export default LinkComponent;