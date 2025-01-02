import React from 'react';
import ReactDOM from 'react-dom/client'; // Import correto para o React 18+
import './styles/index.css';
import App from './App';

// Encontra o elemento root no DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
