import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Containers/App/App';
import { hotjar } from 'react-hotjar';
import reportWebVitals from './reportWebVitals';


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
