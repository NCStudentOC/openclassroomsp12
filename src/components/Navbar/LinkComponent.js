import React, { useCallback, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const LinkComponent = ({ to, children, color, setActiveLink }) => {
    // const extractedId = to.substring(1);

    // const handleClick = useCallback(() => {
    //     setActiveLink(extractedId);
    // }, [to, setActiveLink]);


    return (
        <HashLink
            smooth
            to={to}
            className="circle-link adapt"
            style={{
                backgroundColor: color
            }}
        // onClick={handleClick}
        >
            {children}
        </HashLink>
    );
}


export default LinkComponent;