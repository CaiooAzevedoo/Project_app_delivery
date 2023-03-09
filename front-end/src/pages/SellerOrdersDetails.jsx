import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getOrderBySellerId from '../Api/Orders';
import { updateSales } from '../Api/Sales';
import NavBar from '../components/NavBar';
import HeadersTableSellerDetails, { emTransito } from './Utils/variables';

function SellerOrdersDetails() {
  const [order, setOrder] = useState({});
  const [buttonState, setButtonState] = useState({
    Preparando: false,
    [emTransito]: false,
  });
  const { id } = useParams();

  useEffect(() => {
    setButtonState(() => ({
      Preparando: order.status === 'Preparando'
      || order.status === emTransito
      || order.status === 'Entregue',
      [emTransito]: order.status === emTransito
      || order.status === 'Pendente'
      || order.status === 'Entregue',
    }));
  }, [order]);

  useEffect(() => {
    const request = async () => {
      const { data } = await getOrderBySellerId();
      setOrder(data[parseInt(id, 10) - 1]);
    };

    request();
  }, []);

  const handleClick = async ({ target: { name } }) => {
    await updateSales(name, order.id);
    setButtonState((prev) => ({ ...prev, [name]: !prev[name] }));
    window.location.reload();
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
            name="Preparando"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ buttonState.Preparando }
            onClick={ handleClick }
          >
            preparar pedido
          </button>
          <button
            type="button"
            name="Em Trânsito"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ buttonState['Em Trânsito'] }
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
