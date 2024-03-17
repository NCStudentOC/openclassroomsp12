
import React, { useState } from 'react';
import LinkComponent from './LinkComponent';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="navbar_circle">
            <LinkComponent active={activeLink === 'point_apropos'} smooth to="/#point_apropos" color="#0090B8" setActiveLink={handleSetActiveLink}>About</LinkComponent>
            <LinkComponent active={activeLink === 'point_skills'} smooth to="/#point_skills" color="#0d794a" setActiveLink={handleSetActiveLink}>Skills</LinkComponent>
            <LinkComponent active={activeLink === 'point_project'} smooth to="/#point_project" color="#F18700" setActiveLink={handleSetActiveLink}>Project</LinkComponent>
            <LinkComponent active={activeLink === 'point_contact'} smooth to="/#point_contact" color="#F9B34B" setActiveLink={handleSetActiveLink}>Contact</LinkComponent>
        </div>
    );
}

export default Navbar;