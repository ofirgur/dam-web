import React from 'react';
import ReactDOM from 'react-dom/client';
import DamWebComponent from './dam-web';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DamWebComponent />
  </React.StrictMode>
);
