import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { getSales } from '../Api/Sales';

function SellerOrderCard({ sale }) {
  // const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const request = async () => {
  //     const response = await getSales();
  //     console.log(response, 'AQUI');
  //     setSales(response.data);
  //   };

  //   request();
  // }, []);

  return (
    <section>

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
          data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
        >
          { sale.status }
        </div>
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
        <div
          data-testid={ `seller_orders__element-order-date-${sale.id}` }
        >
          { sale.deliveryAddress + sale.deliveryNumber }
        </div>
      </button>
    </section>
  );
}

SellerOrderCard.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default SellerOrderCard;
