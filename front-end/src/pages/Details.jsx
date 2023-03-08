import React, { useEffect, useState } from 'react';
import getSalesByUserId from '../Api/Sales';
import NavBar from '../components/NavBar';
import { getLocalStorage } from '../localstorage';
import { calcTotalPrice } from './Utils/CheckoutUtils';

function Details() {
  const [list, setListOrders] = useState([]);
  const [payload, setPayload] = useState({
    userId: '',
    sellerId: 0,
    totalPrice: 0,
    deliveryAddress: '',
    deliveryNumber: '',
    products: [],
  });
  // const [sales, setSales] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const listLocal = getLocalStorage('carrinho');
    const { id } = getLocalStorage('user');

    setPayload((prev) => ({
      ...prev,
      userId: id,
      totalPrice: calcTotalPrice(listLocal),
    }));
    setListOrders(listLocal);
  }, []);

  useEffect(() => {
    const request = async () => {
      const { data } = await getSalesByUserId();
      console.log(data, 'retorno da api');
      setSales(data);
    };
    request();
  }, []);

  return (
    <div>
      <NavBar />

      <div>
        {/* {
          (sales.length > 0) && (sales.map((sale) => (

          )))

        } */}
        <p
          data-testid={
            `customer_order_details__element-order-details-label-order-${id}`
          }
        >
          Numero do pedido

        </p>
        <p>P. Vendedora </p>
        <p>Date</p>
        <p>Status</p>
        <p>Botão de entrega</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>

        <tbody>
          {
            list.map((item, index) => (
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
                  {item.quantity}

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
                  { Number(item.price * item.quantity).toFixed(2).replace('.', ',') }

                </td>
              </tr>
            ))
          }
        </tbody>

        <p
          type="button"
          className="total-value-checkout"
          data-testid="customer_checkout__element-order-total-price"
          id="total"
          name="total"
        >
          Valor Total: R$
          {' '}
          {
            list.length > 0 ? String(payload.totalPrice.toFixed(2)).replace('.', ',') : 0
          }
        </p>
      </table>
    </div>
  );
}

export default Details;
