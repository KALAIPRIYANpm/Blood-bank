import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterPath from './Route';
import LandingPage from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    {/* <LandingPage/> */}
    <RouterPath/>
 </>
);


reportWebVitals();
