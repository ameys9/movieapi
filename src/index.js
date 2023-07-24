import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import App from './App'
import './index.css';
import ScrollToTop from './components/sttop';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
    <Router>
    <ScrollToTop />
    <App/>
    </Router>
    </React.StrictMode>
);





