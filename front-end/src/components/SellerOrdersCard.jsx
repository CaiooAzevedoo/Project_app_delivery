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
          <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>

            { sale.id }
          </p>
        </div>
        <div
          className="status"
          id={ sale.status }
          data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
        >
          { sale.status }
        </div>
        <section>
          <div
            data-testid={ `seller_orders__element-order-date-${sale.id}` }
          >
            { sale.saleDate }
          </div>
          <div
            data-testid={ `seller_orders__element-card-price-${sale.id}` }
          >
            { sale.totalPrice.replace('.', ',') }
          </div>
        </section>
        {/* <div
          data-testid={ `seller_orders__element-order-date-${sale.id}` }
        >
          { sale.deliveryAddress + sale.deliveryNumber }
        </div> */}
      </button>
    </Section>
  );
}

SellerOrderCard.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default SellerOrderCard;
