import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postProduct from '../Api/Products';
import NavBar from '../components/NavBar';
import RoleOption from '../components/RoleOption';
import TableProducts from '../components/TableProducts';
import { getLocalStorage, setLocalstorage } from '../localstorage';
import removeItenLocalStorage, {
  calcTotalPrice,
  getIdAndQuantity,
} from './Utils/CheckoutUtils';
import Main from './styles/Checkout';

function Checkout() {
  const [list, setListOrders] = useState([]);
  const [sellerid, setSellerId] = useState(0);
  const [payload, setPayload] = useState({
    userId: '',
    sellerId: 0,
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
  console.log(payload);

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const listLocal = getLocalStorage('carrinho');
      setPayload((prev) => ({
        ...prev,
        totalPrice: calcTotalPrice(listLocal),
        products: getIdAndQuantity(listLocal) }));
      const { data } = await postProduct(payload);
      navigate(`/customer/orders/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main>
      <NavBar />
      <h2>Finalizando Pedido</h2>
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
              <TableProducts
                key={ index }
                item={ item }
                index={ index }
                handleRemove={ handleRemove }
              />
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
        Vendedor(a) responsável:
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
          Finalizar pedido
        </button>
      </form>

    </Main>
  );
}

export default Checkout;
