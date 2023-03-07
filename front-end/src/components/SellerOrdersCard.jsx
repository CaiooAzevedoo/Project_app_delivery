import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getSales from '../Api/Sales';

function SellerOrderCard() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const request = async () => {
      const response = await getSales();
      setSales(response.data);
    };
    request();
  }, []);

  return (
    <section>
      {sales.map((sale) => (
        <button
          key={ sale.id }
          type="button"
          onClick={ () => {
            navigate(`/seller/orders/${sale.id}`);
          } }
        >
          <div
            data-testid={ `seller_orders__element-order-id-${sale.id}` }
          >
            { sale.id }
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
            { sale.totalPrice.replace(/\./, ',') }
          </div>
          <div
            data-testid={ `seller_orders__element-order-date-${sale.id}` }
          >
            { sale.deliveryAddress + sale.deliveryNumber }
          </div>
        </button>))}
    </section>
  );
}

export default SellerOrderCard;
