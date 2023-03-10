import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { clearLocalStorage, getLocalStorage } from '../localstorage';
import NavBarStyles from './styles/NavBarStyle';

function NavBar() {
  const [navBarState, setNavBarState] = useState({
    userDate: {},
  });
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const rotaSelerDetails = /^\/seller\/orders\/(\w+)?$/i;
  const currectRoute = () => {
    const rota = location.pathname;
    const rotaOrders = /^\/customer\/orders\/(\w+)?$/i;
    const customerProducts = /^\/customer\/products/i;
    const productCheckout = /^\/customer\/checkout/i;
    return (rotaOrders.test(rota)
    || customerProducts.test(rota)
    || productCheckout.test(rota)
    || rotaSelerDetails.test(rota)
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
    <NavBarStyles>
      <section
        className="first-section"
      >
        <div
          data-testid="customer_products__element-navbar-link-products"
          className="link-Produtos"
          id={
            (path === '/customer/products') && ('selected')
          }
        >
          { path === '/admin/manage'
            ? ('Gerenciar usuários')
            : (<Link to="/customer/products">Produtos</Link>) }
        </div>
        {
          (currectRoute()) && (
            <div
              id={
                (path === '/seller/orders'
                || path === '/customer/orders')
                && ('selected')
              }
              className="maus-pedidos-nav-bar"
              data-testid="customer_products__element-navbar-link-orders"
            >
              { rotaSelerDetails.test(path) ? (
                <Link to="/seller/orders">Meus Pedidos</Link>
              ) : (
                <Link to="/customer/orders">Meus Pedidos</Link>
              )}
            </div>
          )
        }
      </section>
      <section className="secund-section">
        <div
          className="user-name"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { navBarState.userDate.name }
        </div>
        <button
          className="button-exit"
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </section>
    </NavBarStyles>
  );
}

export default NavBar;
