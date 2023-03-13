import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdmManage from './pages/AdmManage';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Login from './pages/Login';
import Products from './pages/Products';
import UserRegister from './pages/UserRegister';
import LoginProvider from './provider/LoginProvider';
import ProductProvider from './provider/ProductProvider';
import RegisterProvider from './provider/RegisterProvider';
import SellerOrders from './pages/SellerOrders';
import SellerOrdersDetails from './pages/SellerOrdersDetails';
import Orders from './pages/Orders';

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
      <Route path="/customer/orders/:id" element={ <Details /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route
        path="/admin/manage"
        className="background-page"
        element={
          <RegisterProvider><AdmManage /></RegisterProvider>
        }
      />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrdersDetails /> } />
    </Routes>
  );
}

export default App;
