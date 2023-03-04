import React from 'react';
import ReactDOM from 'react-dom/client';
//import "./styles/index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
