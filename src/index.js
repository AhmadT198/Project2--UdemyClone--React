import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faStarHalfStroke, faStar, faBars, faMagnifyingGlass, faCartShopping, faGlobe } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/NavBar';

library.add(faStarHalfStroke, faStar, faBars, faMagnifyingGlass, faCartShopping, faGlobe)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/courses" element={<App />} /> */}

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
