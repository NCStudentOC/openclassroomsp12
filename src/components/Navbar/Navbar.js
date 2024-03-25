
import React, { useState } from 'react';
import LinkComponent from './LinkComponent';


const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleSetActiveLink = (link) => {
        console.log('Lien:', link)
        setActiveLink(link);


    };

    return (
        <div className="navbar_circle">
            <LinkComponent active={activeLink === 'point_apropos'} smooth to="/#point_apropos" color="#0090B8" onClick={() => handleSetActiveLink('point_apropos')}>About</LinkComponent>
            <LinkComponent active={activeLink === 'point_skills'} smooth to="/#point_skills" color="#0d794a" onClick={() => handleSetActiveLink('point_skills')}>Skills</LinkComponent>
            <LinkComponent active={activeLink === 'point_project'} smooth to="/#point_project" color="#F18700" onClick={() => handleSetActiveLink('point_project')}>Project</LinkComponent>
            <LinkComponent active={activeLink === 'point_contact'} smooth to="/#point_contact" color="#F9B34B" onClick={() => handleSetActiveLink('point_contact')}>Contact</LinkComponent>
        </div>
    );
}

export default Navbar;
