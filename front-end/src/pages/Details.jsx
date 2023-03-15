import React, { useEffect, useState } from 'react';
import { getSalesByUserId } from '../Api/Sales';
import DetailsTable from '../components/DetailsTable';
import NavBar from '../components/NavBar';
import TableProducts from '../components/TableProducts';
import { getLocalStorage } from '../localstorage';
import Main from './styles/DetailsStyles';
import { calcTotalPrice } from './Utils/CheckoutUtils';
import Table from './styles/TableProductsStyle';

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
  const [sales, setSales] = useState([]);

  useEffect(() => {
    console.log(list);
  }, [list, sales]);

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
      if (data.length > 0) {
        setSales(data);
        const newSales = [];
        data.forEach((sale) => {
          sale.products.forEach((product) => {
            newSales.push({
              ...product,
              quantity: product.salesProduct.quantity,
            });
          });
        });
        setListOrders(newSales);
      }
    };
    request();
  }, []);

  return (
    <Main>
      <NavBar />
      <ul>
        {(sales.length > 0) && (sales.map(
          (sale, index) => (
            <DetailsTable
              key={ sale.id }
              sale={ sale }
              index={ index }
            />
          ),
        ))}
      </ul>
      <Table>
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
              <TableProducts
                key={ index }
                item={ item }
                index={ index }
              />
            ))
          }
        </tbody>
        <p
          type="button"
          className="total-value-details"
          data-testid="customer_order_details__element-order-total-price"
          id="total"
          name="total"
        >
          Valor Total: R$
          {' '}
          {
            list.length > 0
            && String(payload.totalPrice.toFixed(2)).replace('.', ',')
          }
        </p>
      </Table>
    </Main>
  );
}

export default Details;
