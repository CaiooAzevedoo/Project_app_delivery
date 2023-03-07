import React from 'react';
import PropTypes from 'prop-types';

function CardSales({ item }) {
  return (
    <section>
      <p
        data-testid={ `customer_orders__element-order-id-${item.id}` }
      >
        {item.id}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${item.id}` }
      >
        {item.status}
      </p>
      <div>
        <p data-testid={ `customer_orders__element-order-date-${item.id}` }>
          {item.date}
        </p>
        <p data-testid={ `customer_orders__element-card-price-${item.id}` }>
          {item.date}
        </p>
      </div>
    </section>
  );
}

CardSales.propTypes = {
  item: PropTypes.objectOf.isRequired,
};

export default CardSales;
