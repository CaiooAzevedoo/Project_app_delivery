import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateSales } from '../Api/Sales';
import Section from './styles/DetailsTable';

function DetailsTable({ sale, index }) {
  const [saleStatus, setSaleStatus] = useState(sale.status);
  const handleClick = async () => {
    await updateSales('Entregue', sale.id);
    setSaleStatus('Entregue');
  };

  return (
    <Section>
      <div>
        <p
          id="id"
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {sale.id}

        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {sale.seller.name}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {sale.saleDate}

        </p>
        <p
          id="status"
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status${index}`
          }
        >
          {saleStatus}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled={
            saleStatus === 'Entregue'
            || saleStatus === 'Preparando'
            || saleStatus === 'Pendente'
          }
          onClick={ handleClick }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
    </Section>
  );
}

DetailsTable.propTypes = {
  sale: PropTypes.objectOf.isRequired,
  index: PropTypes.number.isRequired,
};

export default DetailsTable;
