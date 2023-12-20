import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import '@/assets/styles/globals.css';
import '@/assets/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
