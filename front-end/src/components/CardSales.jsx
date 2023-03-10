import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import Section from './styles/SellerOrdersCardStyle';

function CardSales({ sale }) {
  const navigate = useNavigate();
  return (
    <Section>
      <button
        type="button"
        onClick={
          () => navigate(`/customer/orders/${sale.id}`)
        }
      >
        <div>
          <p
            id="id"
            data-testid={ `customer_orders__element-order-id-${sale.id}` }
          >
            {sale.id}
          </p>
        </div>
        <p
          className="status"
          id={ sale.status === 'Em Trânsito' ? ('Em-Transito') : (sale.status) }
          data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
        >
          {sale.status}
        </p>
        <section>
          <p id="date" data-testid={ `customer_orders__element-order-date-${sale.id}` }>
            {sale.saleDate}
          </p>
          <p id="price" data-testid={ `customer_orders__element-card-price-${sale.id}` }>
            {(sale.totalPrice).replace('.', ',')}
          </p>
        </section>
      </button>

    </Section>
  );
}

CardSales.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default CardSales;
