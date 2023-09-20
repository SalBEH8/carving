import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import FormulairePage from './formulaire.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/inscription" element={<FormulairePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
