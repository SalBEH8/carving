import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import FormulairePage from './formulaire.jsx';
import AuthPage from './auth.jsx'; // Importez la page de connexion
import NavBar from './navBar.jsx'; // Importez la barre de navigation
import './styles.css'; // Importez le fichier CSS que vous avez créé

ReactDOM.render(
  <Router>
    <NavBar /> {}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/inscription" element={<FormulairePage />} />
      <Route path="/connexion" element={<AuthPage />} /> {}
    </Routes>
  </Router>,
  document.getElementById('root')
);
