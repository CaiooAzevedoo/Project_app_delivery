import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Section from './styles/SellerOrdersCardStyle';

function SellerOrderCard({ sale }) {
  const navigate = useNavigate();
  return (
    <Section>
      <button
        type="button"
        onClick={ () => {
          navigate(`/seller/orders/${sale.id}`);
        } }
      >
        <div>
          <p id="id" data-testid={ `seller_orders__element-order-id-${sale.id}` }>

            { sale.id }
          </p>
        </div>
        <p
          className="status"
          id={ sale.status === 'Em Trânsito' ? ('Em-Transito') : (sale.status)  }
          data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
        >
          { sale.status }
        </p>
        <section>
          <p
            id="date"
            data-testid={ `seller_orders__element-order-date-${sale.id}` }
          >
            { sale.saleDate }
          </p>
          <p
            id="price"
            data-testid={ `seller_orders__element-card-price-${sale.id}` }
          >
            { sale.totalPrice.replace('.', ',') }
          </p>
        </section>
      </button>
    </Section>
  );
}

SellerOrderCard.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default SellerOrderCard;
