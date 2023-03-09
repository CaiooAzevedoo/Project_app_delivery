import React, { useState, useEffect } from 'react';
import getOrderBySellerId from '../Api/Orders';
import NavBar from '../components/NavBar';
import HeadersTableSellerDetails from './Utils/variables';

function SellerOrdersDetails() {
  const [order, setOrder] = useState({});
  const [buttonState, setButtonState] = useState({
    'preparar-pedido': false,
    'saiu-para-entrega': false,
  });

  useEffect(() => {
    const request = async () => {
      const { data } = await getOrderBySellerId();
      setOrder(data[0]);
    };

    request();
  }, []);

  const handleClick = ({ target: { name } }) => {
    setButtonState((prev) => ({ ...prev, [name]: !prev[name] }));
  };

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
            data-testid={
              `seller_order_details__element-order-details-label-delivery-${'status'}`
            }
          >
            {order.status}
          </p>
          <button
            type="button"
            name="preparar-pedido"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ buttonState['preparar-pedido'] }
            onClick={ handleClick }
          >
            preparar pedido
          </button>
          <button
            type="button"
            name="saiu-para-entrega"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ buttonState['saiu-para-entrega'] }
            onClick={ handleClick }
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
            { (order.products) && (
              order.products.map((item, index) => (
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
                    {item.salesProduct.quantity}

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
                      Number(item.price * item.salesProduct.quantity)
                        .toFixed(2).replace('.', ',')
                    }

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
      {(order.totalPrice) && (
        <div
          data-testid="seller_order_details__element-order-total-price"
        >
          { (order.totalPrice).replace('.', ',') }
        </div>
      )}
    </main>
  );
}

export default SellerOrdersDetails;
