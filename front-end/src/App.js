import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import UserRegister from './pages/UserRegister';
import LoginProvider from './provider/LoginProvider';
import ProductProvider from './provider/ProductProvider';
import RegisterProvider from './provider/RegisterProvider';
import OrderDetails from './pages/OrderDetails';
import AdmManage from './pages/AdmManage';

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
        path="/customer/checkout"
        element={
          <Checkout />
        }
      />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      {/* <Route path="/customer/orders/:id" element={ <Details /> } /> */}
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
