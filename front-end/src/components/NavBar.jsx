import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage, getLocalStorage } from '../localstorage';
import './styles/NavBar.css';

function NavBar() {
  const [navBarState, setNavBarState] = useState({
    userDate: {},
  });
  const navigate = useNavigate();

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
        Produtos
      </div>
      <div data-testid="customer_products__element-navbar-link-orders">
        Pedidos
      </div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        {navBarState.userDate.name}
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
