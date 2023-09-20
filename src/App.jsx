import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import './styles.css'; // Importez le fichier CSS que vous avez créé

function PresentationPage() {
  return (
    <div className="presentation-container">
      <NavBar />
      <header className="header">
        <h1 className="titre">Carving</h1>
        <p>Une application pour vous aider à lutter contre les addictions et gérer votre budget.</p>
      </header>
      <main className="main-content">
        <section className="section1">
          <h2>Comment ça fonctionne ?</h2>
          <ul>
            <li>Carving vous offre un moyen efficace de suivre de près vos habitudes de consommation et de gérer toutes les dépenses associées à votre dépendance.</li>
            <li>Cette méthode, découverte il y a quelques années et popularisée par des experts en santé mentale, repose sur une échelle de 0 à 10 pour évaluer votre sensation quotidienne de résister à la consommation.</li>
            <li>Vous pouvez remplir des questionnaires détaillés chaque jour pour évaluer votre sensation, notée sur une échelle de 0 (j'ai résisté seul, aucune envie de consommer) à 10 (impossible de résister, j'ai consommé sans résistance, signe d'addiction), et observer votre évolution au fil du temps.</li>
            <li>Cela vous permettra de prendre des décisions éclairées pour votre bien-être.</li>
          </ul>
        </section>
        <section className="section">
          <h2>Pourquoi Carving ?</h2>
          <p>
            Nous croyons que la prise de conscience de vos habitudes est le premier pas vers un changement positif.
            Carving vous accompagne dans votre parcours vers une vie plus saine et équilibrée.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>
          Pour plus d'informations sur la lutte contre les addictions, consultez
          <br />
          <a href="https://www.santepubliquefrance.fr/determinants-de-sante/alcool/documents/carte-postale/probleme-d-addiction-carte-rouge" target="_blank" rel="noopener noreferrer">
            Santé Publique France
          </a>
          .
        </p>
      </footer>
      <div className="button-container">
        <Link to="/inscription" className="button-link"> {/* Lien vers la page d'inscription */}
          <button className="button">Créer un compte</button>
        </Link>
        <Link to="/connexion" className="button-link"> {/* Lien vers la page de connexion */}
          <button className="button">Se connecter</button>
        </Link>
      </div>
    </div>
  );
}

export default PresentationPage;