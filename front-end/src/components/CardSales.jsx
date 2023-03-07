import React from 'react';

function CardSales() {
  return (
    <section>
      <p
        data-testid={ `customer_orders__element-order-id-${null}` }
      >
        sale number
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${null}` }
      >
        sale status
      </p>
      <div>
        <p data-testid={ `customer_orders__element-order-date-${null}` }>
          sale date
        </p>
        <p data-testid={ `customer_orders__element-card-price-${null}` }>
          sale price
        </p>
      </div>
    </section>
  );
}

export default CardSales;
