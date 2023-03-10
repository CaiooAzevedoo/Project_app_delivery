import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

function CardSales({ sale }) {
  const navigate = useNavigate();
  return (
    <section>
      <button
        type="button"
        onClick={
          () => navigate(`/customer/orders/${sale.id}`)
        }
      >
        <p
          data-testid={ `customer_orders__element-order-id-${sale.id}` }
        >
          {sale.id}
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
        >
          {sale.status}
        </p>
        <div>
          <p data-testid={ `customer_orders__element-order-date-${sale.id}` }>
            {sale.saleDate}
          </p>
          <p data-testid={ `customer_orders__element-card-price-${sale.id}` }>
            {(sale.totalPrice).replace('.', ',')}
          </p>
        </div>
      </button>

    </section>
  );
}

CardSales.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default CardSales;
