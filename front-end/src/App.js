import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LoginProvider from './provider/LoginProvider';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <LoginProvider><Login /></LoginProvider> } />
    </Routes>
  );
}

export default App;
