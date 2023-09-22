import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import GraduationSlider from './graduationSlider'; // Importez GraduationSlider
import CostGraduation from './costSlider';
import './styles.css';

function PresentationPage() {
return (
  <div className="presentation-container">
    <NavBar />
      <header className="header"> 
      {/*
      <div className="header-content">
        <h1 className="titre">Cravin Manager</h1>
        <p className="paragraphe">Une application pour vous aider à lutter contre les addictions et gérer votre budget.</p>
      </div> 
      */}
    </header> 
    <main className="main-content">
      <section className="grad-section">
        {}
        <h2>Comment ça fonctionne ?</h2>
        <ul>
          <li>Craving vous offre un moyen efficace de suivre de près vos habitudes de consommation et de gérer toutes les dépenses associées à votre dépendance.</li>
          <li>Cette méthode, découverte il y a quelques années et popularisée par des experts en santé mentale, repose sur une échelle de 0 à 10 pour évaluer votre sensation quotidienne de résister à la consommation.</li>
          <li>Vous pouvez remplir des questionnaires détaillés chaque jour pour évaluer votre sensation, notée sur une échelle de 0 (j'ai résisté seul, aucune envie de consommer) à 10 (impossible de résister, j'ai consommé sans résistance, signe d'addiction), et observer votre évolution au fil du temps.</li>
          <li>Cela vous permettra de prendre des décisions éclairées pour votre bien-être.</li>
        </ul>
      </section>
      <GraduationSlider /> {}
      <section className="grad-section">
        {}
        <h2>Pourquoi le Craving ?</h2>
    <ul>
        <p>
          Nous croyons que la prise de conscience de vos habitudes est le premier pas vers un changement positif.
          Craving vous accompagne dans votre parcours vers une vie plus saine et équilibrée.
        </p>
      </ul>
      </section>
      <CostGraduation /> {}
    </main>
    <footer className="footer">
      <p>
        Pour plus d'informations sur la lutte contre les addictions, consultez
        <br />
        <a href="https://www.santepubliquefrance.fr/determinants-de-sante/alcool/documents/carte-postale/probleme-d-addiction-carte-rouge" target="_blank" rel="noopener noreferrer">
          Santé Publique France
        </a>
      </p>
    </footer>
    <div className="button-container">
      <Link to="/inscription" className="button-link"> {}
        <button className="button">Créer un compte</button>
      </Link>
      <Link to="/connexion" className="button-link"> {}
        <button className="button">Se connecter</button>
      </Link>
    </div>
  </div>
);
}

export default PresentationPage;
