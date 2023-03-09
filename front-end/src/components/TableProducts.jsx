import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function TableProducts({ item, index, handleRemove = () => {} }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <tr key={ index }>
      <td
        className="index-table-checkout"
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
        className="quantity-table-checkout"
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
      >
        {item.quantity}

      </td>
      <td
        className="unit-value-table-checkout"
        data-testid={
          `customer_checkout__element-order-table-unit-price-${index}`
        }
      >
        { Number(item.price).toFixed(2).replace('.', ',')}

      </td>
      <td
        className="sub-total-table-checkout"
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
      >
        { Number(item.price * item.quantity).toFixed(2).replace('.', ',') }

      </td>
      {
        (path === '/customer/checkout') && (
          <td>
            <button
              className="rm-item-checkout-btn"
              type="button"
              id={ item.id }
              data-testid={
                `customer_checkout__element-order-table-remove-${index}`
              }
              onClick={ handleRemove }
            >
              Remover
            </button>
          </td>
        )
      }
    </tr>
  );
}

TableProducts.propTypes = {
  item: PropTypes.objectOf.isRequired,
  index: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TableProducts;
