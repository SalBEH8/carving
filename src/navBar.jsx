import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Importez le fichier CSS que vous avez créé


function NavBar() {
return (
<nav>
    <h1><Link to="/"class="logo">Craving Manager</Link></h1>
        <ul class="nav-list">
        <li>
        <Link to="/">Accueil</Link>
    </li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li>
        <Link to="/inscription">Inscription</Link>
    </li>
    <li>
        <Link to="/connexion">Connexion</Link>
        </li>
        </ul>
</nav>
);
}
export default NavBar;
