import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { clearLocalStorage, getLocalStorage } from '../localstorage';
import './styles/NavBar.css';

function NavBar() {
  const [navBarState, setNavBarState] = useState({
    userDate: {},
  });
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const currectRoute = () => {
    const rota = location.pathname;
    const rotaOrders = /^\/customer\/orders\/(\w+)?$/i;
    const customerProducts = /^\/customer\/products/i;
    const productCheckout = /^\/customer\/checkout/i;
    return (rotaOrders.test(rota)
    || customerProducts.test(rota)
    || productCheckout.test(rota)
    );
  };

  useEffect(() => {
    const localStorageDate = getLocalStorage('user');
    setNavBarState((prev) => ({ ...prev, userDate: localStorageDate }));
  }, []);

  const handleLogout = () => {
    clearLocalStorage();
    navigate('/login');
  };

  return (
    <menu className="header-products">
      <div data-testid="customer_products__element-navbar-link-products">
        { path === '/admin/manage' ? 'Gerenciar usuários' : 'Produtos' }
      </div>
      {
        (currectRoute()) && (
          <div
            className="maus-pedidos-nav-bar"
            data-testid="customer_products__element-navbar-link-orders"
          >
            <Link to="/customer/orders">MEUS PEDIDOS</Link>
          </div>
        )
      }
      <div data-testid="customer_products__element-navbar-user-full-name">
        { navBarState.userDate.name }
      </div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </menu>
  );
}

export default NavBar;
