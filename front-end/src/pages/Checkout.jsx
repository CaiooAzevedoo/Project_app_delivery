import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import postProduct from '../Api/Products';
import { setLocalstorage, getLocalStorage } from '../localstorage';
import NavBar from '../components/NavBar';
import RoleOption from '../components/RoleOption';
import removeItenLocalStorage,
{ calcTotalPrice,
  getIdAndQuantity,
} from './Utils/CheckoutUtils';
import './styles/Checkout.css';

function Checkout() {
  const [list, setListOrders] = useState([]);
  const [sellerid, setSellerId] = useState(0);
  const [payload, setPayload] = useState({
    userId: '',
    sellerId: '',
    totalPrice: 0,
    deliveryAddress: '',
    deliveryNumber: '',
    products: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    setPayload((prev) => ({ ...prev, sellerId: sellerid }));
  }, [sellerid]);

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
    setLocalstorage('carrinho', list);
    setPayload((prev) => ({
      ...prev,
      totalPrice: calcTotalPrice(list),
      products: getIdAndQuantity(list) }));
  }, [list]);

  const handleRemove = ({ target: { id } }) => {
    const newList = removeItenLocalStorage('carrinho', id);
    setListOrders(newList);
    setPayload((prev) => ({ ...prev, products: getIdAndQuantity(newList) }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const listLocal = getLocalStorage('carrinho');
    setPayload((prev) => ({
      ...prev,
      totalPrice: calcTotalPrice(listLocal),
      products: getIdAndQuantity(listLocal) }));
    const { data } = await postProduct(payload);
    navigate(`/customer/orders/${data.id}`);
  };

  return (
    <div>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
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
                <td>
                  <button
                    className="rm-item-checkout-btn"
                    type="button"
                    id={ item.id }
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ handleRemove }
                  >
                    Remover
                  </button>
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

      <form action="">
        P. Vendedora Responsável:
        <RoleOption setSellerId={ setSellerId } />
        Endereço
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          onChange={ ({ target: { value } }) => {
            setPayload((prev) => ({ ...prev, deliveryAddress: value }));
          } }
        />
        Número
        <input
          type="text"
          data-testid="customer_checkout__input-address-number"
          onChange={ ({ target: { value } }) => {
            setPayload((prev) => ({ ...prev, deliveryNumber: value }));
          } }
        />
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleCheckout }
        >
          FINALIZAR PEDIDO
        </button>
      </form>

    </div>
  );
}

export default Checkout;
