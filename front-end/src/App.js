import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import LoginProvider from './Provider/LoginProvider';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <LoginProvider><Login /></LoginProvider> } />
    </Routes>
  );
}

export default App;
