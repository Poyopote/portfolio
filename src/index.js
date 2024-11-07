import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Containers/App/App';
import { hotjar } from 'react-hotjar';

const siteId = 3654810;
const hotjarVersion = 6;

hotjar.initialize(siteId, hotjarVersion);

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
