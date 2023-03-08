import React from 'react';
import PropTypes from 'prop-types';
// import { getSales } from '../Api/Sales';

function DetailsTable({ sale }) {
  return (
    <section>

      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {sale.id}

        </p>
        <p
          data-testId="customer_order_details__element-order-details-label-seller-name"
        >
          {sale.seller.name}
        </p>
        <p
          data-testId="customer_order_details__element-order-details-label-order-date"
        >
          {sale.saleDate}

        </p>
        <p
          data-testId="customer_order_details__element
          -order-details-label-delivery-status"

        >
          {sale.status}

        </p>
        <button
          type="button"
          data-testId="customer_order_details__button-delivery-check"
        >
          Botão de entrega

        </button>
      </div>
    </section>
  );
}

DetailsTable.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default DetailsTable;
