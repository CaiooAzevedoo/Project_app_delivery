import React from 'react';

const list = [];

function Checkout() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Ite</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, index) => (
            <tr key={ index }>
              <td
                data-testid={ `customer_checkout_
                _element-order-table-item-number-${index}` }
              >
                {`${index + 1}`}

              </td>
              <td
                data-testid={ `customer_checkout_
                _element-order-table-name-${index}` }
              >
                {item.description}
              </td>
              <td
                data-testid={ `customer_checkout_
                _element-order-table-quantity-${index}` }
              >
                {item.quantity}

              </td>
              <td
                data-testid={ `customer_checkout_
                _element-order-table-unit-price-${index}` }
              >
                {item.unitPrice}

              </td>
              <td
                data-testid={ `customer_checkout_
                _element-order-table-sub-total-${index}` }
              >
                {item.subTotal}

              </td>
              <button type="button">Remover</button>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Checkout;
