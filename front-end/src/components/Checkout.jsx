import React from 'react';
import { getLocalStorage } from '../localstorage';
import NavBar from './NavBar';
import TotalPriceButton from './TotalPriceButton';

// const list = getLocalStorage('carrinho');

function Checkout() {
  const list = getLocalStorage('carrinho');

  return (
    <div>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {`${index + 1}`}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {item.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantity}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { Number(item.price).toFixed(2).replace('.', ',')}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { Number(item.price * item.quantity).toFixed(2).replace('.', ',') }

                </td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover

                </button>
              </tr>
            ))
          }
        </tbody>
        <p
          type="button"
          data-testid="customer_checkout__element-order-total-price"
          id="total"
          name="total"
        >
          <TotalPriceButton />
        </p>
      </table>

      <form action="">

        P. Vendedora Responsável:
        <select
          type="number"
          data-testid="customer_checkout__select-seller"
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        Endereço
        <input
          type="text"
          data-testid="customer_checkout__input-address"
        />
        Número
        <input
          type="text"
          data-testid="customer_checkout__input-address-number"
        />
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          // onClick={ handleCheckout }
        >
          FINALIZAR PEDIDO

        </button>
      </form>

    </div>
  );
}

export default Checkout;
