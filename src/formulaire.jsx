import React, { useState } from 'react';
import './styles.css'; // Importez le fichier CSS que vous avez créé

function FormulairePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Gérez l'inscription ici en utilisant les données du formulaire
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form>
        <fieldset>
          <legend>Informations personnelles</legend>
          <div>
            <label>
              Nom:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              E-mail:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Informations de connexion</legend>
          <div>
            <label>
              Mot de passe:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Confirmez le mot de passe:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        <button type="button" onClick={handleRegister}>
          Créer un compte
        </button>
      </form>
    </div>
  );
}

export default FormulairePage;
