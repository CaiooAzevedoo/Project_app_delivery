import React from 'react';

function NavBar() {
  return (
    <menu>
      <div data-testid="customer_products__element-navbar-link-products">
        Produtos
      </div>
      <div data-testid="customer_products__element-navbar-link-orders">
        Pedidos
      </div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        Usuário
      </div>
      <div data-testid="customer_products__element-navbar-link-logout">
        Sair
      </div>
    </menu>
  );
}

export default NavBar;
