import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LoginProvider from './provider/LoginProvider';
import RegisterProvider from './provider/RegisterProvider';
import Products from './pages/Products';
import UserRegister from './pages/UserRegister';
import ProductProvider from './provider/ProductProvider';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <LoginProvider><Login /></LoginProvider> } />
      <Route
        path="/register"
        element={ <RegisterProvider><UserRegister /></RegisterProvider> }
      />
      <Route
        path="/customer/products"
        element={
          <ProductProvider>
            <Products />
          </ProductProvider>
        }
      />
      <Route
        path="/admin/manage"
        element={
          <RegisterProvider><AdmManage /></RegisterProvider>
        }
      />
    </Routes>
  );
}

export default App;
