import { HashLink } from 'react-router-hash-link';

const LinkComponent = ({ to, children, color, onClick, active }) => {
    const linkClass = `circle-link adapt ${active ? 'active' : ''}`;

    return (
        <HashLink
            smooth
            to={to}
            className={linkClass}
            style={{
                backgroundColor: active ? color : color
            }}
            onClick={onClick}
        >
            {children}
        </HashLink>
    );
}

export default LinkComponent;
