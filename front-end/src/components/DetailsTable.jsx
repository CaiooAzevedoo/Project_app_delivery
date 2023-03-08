import React from 'react';
import PropTypes from 'prop-types';
// import { getSales } from '../Api/Sales';

function DetailsTable({ sale }) {
  return (
    <section>

      <div>
        <p
          data-testid={
            `customer_order_details__element-order-details-label-order-${sale.id}`
          }
        >
          Numero do pedido

        </p>
        <p
          data-testId={ `customer_order_details__element
          -order-details-label-seller-${sale.name}` }
        >
          P. Vendedora
        </p>
        <p
          data-testId={ `Group customer_order_details__element
          -order-details-label-order-${sale.date}` }
        >
          Date

        </p>
        <p
          data-testId={ `customer_order_details__element
        -order-details-label-delivery-status${sale.status}` }
        >
          Status

        </p>
        <button
          type="button"
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
