import React, { useState } from 'react';
import './styles.css'; // Importez le fichier CSS que vous avez créé


function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Gérez l'authentification ici en utilisant les données du formulaire
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form>
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
        <button type="button" onClick={handleLogin}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
