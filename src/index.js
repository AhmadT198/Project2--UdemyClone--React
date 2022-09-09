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
import NavBar from './components/NavBar';
import SingleCoursePage from './components/SingleCourePage/SingleCoursePage'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as emptyStar, faFolder, faFile, faBell } from '@fortawesome/free-regular-svg-icons'
import { faUser,faMedal,faChevronDown, faCheck, faTrophy, faMobileScreen, faInfinity, faTv, faStarHalfStroke, faStar, faBars, faMagnifyingGlass, faCartShopping, faGlobe, faChevronRight, faChevronLeft, faCircleExclamation, faClosedCaptioning, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faMedal, faChevronDown, faCheck, faTrophy, faMobileScreen, faInfinity, faTv, faStarHalfStroke, faStar, faBars, faMagnifyingGlass, faCartShopping, faGlobe, faChevronRight, faChevronLeft, faCircleExclamation, faClosedCaptioning, faCirclePlay)

library.add(emptyStar, faFolder, faFile, faBell)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/course/:courseUrl" element={<SingleCoursePage />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
