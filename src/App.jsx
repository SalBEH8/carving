import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar'; 

function PresentationPage() {
  return (
    <div>
      <NavBar />
      <header>
        <h1>Carving</h1>
        <p>Une application pour vous aider à lutter contre les addictions et gérer votre budget.</p>
      </header>
      <main>
        <section>
          <h2>Comment ça fonctionne ?</h2>
          <p>
            Carving vous permet de suivre vos habitudes de consommation et de gérer vos dépenses liées à l'addiction.
            Remplissez les questionnaires quotidiens pour évaluer votre sensation et votre progression au fil du temps.
          </p>
        </section>
        <section>
          <h2>Pourquoi Carving ?</h2>
          <p>
            Nous croyons que la prise de conscience de vos habitudes est le premier pas vers un changement positif.
            Carving vous accompagne dans votre parcours vers une vie plus saine et équilibrée.
          </p>
        </section>
      </main>
      <footer>
        <p>
          Pour plus d'informations sur la lutte contre les addictions, consultez
          <a href="https://www.santepubliquefrance.fr/determinants-de-sante/alcool/documents/carte-postale/probleme-d-addiction-carte-rouge" target="_blank" rel="noopener noreferrer">Santé Publique France</a>.
        </p>
      </footer>
      <Link to="/inscription"> {/* Lien vers la page d'inscription */}
        <button>Créer un compte</button>
      </Link>
      <Link to="/connexion"> {/* Lien vers la page de connexion */}
        <button>Se connecter</button>
      </Link>
    </div>
  );
}

export default PresentationPage;
