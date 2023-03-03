import React from 'react';
import { getLocalStorage } from '../localstorage';

const list = getLocalStorage('carrinho');

function Checkout() {
  return (
    <div>
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
                  {item.price}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {item.price * item.quantity}

                </td>
                <button type="button">Remover</button>
              </tr>
            ))
          }
        </tbody>
      </table>

      <form action="">
        P. Vendedora Responsável
        <input
          type="number"
          data-testid="customer_checkout__select-seller"
        />
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
