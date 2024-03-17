import Logo from "../../assets/logosvg.svg";
import Navbar from '../Navbar/Navbar'
import { HashLink as NavLink } from 'react-router-hash-link';
import Fond from '../../assets/fond.webp'


export default function Header() {
    return (
        <header className="container_header">
            <img src={Fond}></img>
            <NavLink smooth to="#point_accueil">
                <div className="container_logo">

                    <img src={Logo} alt="Développeur Frontend" className="logo" />

                </div>
            </NavLink>
            <Navbar />
        </header>
    )
}
