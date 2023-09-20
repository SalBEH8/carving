// Layout.jsx
import React from 'react';
import NavBar from './navBar'; // Assurez-vous d'importer votre barre de navigation ici

function Layout({ children }) {
  return (
    <div>
      <NavBar /> {/* Incluez votre barre de navigation ici */}
      <main>{children}</main> {/* C'est l'endroit où le contenu de chaque page sera affiché */}
      <footer>
        {/* Ajoutez votre pied de page ici */}
      </footer>
    </div>
  );
}

export default Layout;
