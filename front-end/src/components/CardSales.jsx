import React from 'react';
import PropTypes from 'prop-types';

function CardSales({ sale }) {
  return (
    <section>
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
          {sale.date}
        </p>
        <p data-testid={ `customer_orders__element-card-price-${sale.id}` }>
          {sale.date}
        </p>
      </div>
    </section>
  );
}

CardSales.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default CardSales;
