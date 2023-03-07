import React, { useState, useEffect } from 'react';
import getSales from '../Api/Sales';

function SellerOrderList() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await getSales();
      setSales(response.data);
    };
    request();
  }, []);
  // console.log(sales[0].id);

  return (
    <section>
      {sales.map((sale) => (
        <button
          key={ sale.id }
          type="button"
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

export default SellerOrderList;
