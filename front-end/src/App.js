import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LoginProvider from './provider/LoginProvider';

import UserRegister from './pages/UserRegister';
// import FormRegister from './components/FormRegister';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <LoginProvider><Login /></LoginProvider> } />
      <Route exact path="/register" element={ <UserRegister /> } />
    </Routes>
  );
}

export default App;
