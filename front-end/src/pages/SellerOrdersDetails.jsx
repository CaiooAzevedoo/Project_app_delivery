import React, { useState, useEffect } from 'react';
import getOrderBySellerId from '../Api/Orders';
import NavBar from '../components/NavBar';
import HeadersTableSellerDetails from './Utils/variables';

function SellerOrdersDetails() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    const request = async () => {
      const result = await getOrderBySellerId();
      setOrder(result.data);
    };

    request();
  }, []);

  return (
    <main>
      <NavBar />
      <section>
        <section>
          <p
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            { order.id }
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { order.saleDate }
          </p>
          <p
            data-testid="seller_order_details__element-
            order-details-label-delivery-status"
          >
            {order.status}
          </p>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
          >
            preparar pedido
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
          >
            saiu para entrega
          </button>
        </section>
        <table>
          <thead>
            <tr>
              {
                HeadersTableSellerDetails.map((word) => (
                  <th key={ word }>{word}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            { (order.id) && (
              order.map((item, index) => (
                <tr key={ index }>
                  <td
                    className="index-table-checkout"
                    data-testid={
                      `customer_checkout__element-order-table-item-number-${index}`
                    }
                  >
                    {`${index + 1}`}

                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-name-${index}`
                    }
                  >
                    {item.name}
                  </td>
                  <td
                    className="quantity-table-checkout"
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    {item.saleProduct.quantity}

                  </td>
                  <td
                    className="unit-value-table-checkout"
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { Number(item.price).toFixed(2).replace('.', ',')}

                  </td>
                  <td
                    className="sub-total-table-checkout"
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    {
                      Number(item.price * item.saleProduct.quantity)
                        .toFixed(2).replace('.', ',')
                    }

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
      <div
        data-testid="seller_order_details__element-order-total-price"
      >
        { (order.totalprice).replace('.', ',') }
      </div>
    </main>
  );
}

export default SellerOrdersDetails;
