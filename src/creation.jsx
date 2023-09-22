import React, { useState } from 'react';
import './styles.css';


function CreationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // l'inscription en utilisant les données du formulaire
  };

  return (
    <div>
      <h2>Création de Compte</h2>
      <form>
        <label>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirmez le mot de passe:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleRegister}>
          Créer un compte
        </button>
      </form>
    </div>
  );
}

export default CreationPage;
