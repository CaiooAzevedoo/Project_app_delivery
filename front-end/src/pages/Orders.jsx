import React, { useEffect, useState } from 'react';
import { getSalesByUserId } from '../Api/Sales';
import CardSales from '../components/CardSales';
import NavBar from '../components/NavBar';
import Section from './styles/SellerOrdersStyle';

function Orders() {
  const [allSales, setAllSales] = useState([]);

  useEffect(() => {
    const requestSeles = async () => {
      const { data } = await getSalesByUserId();
      console.log(data, 'ORDERS PAGINA');
      setAllSales((data) || []);
    };

    requestSeles();
  }, []);

  return (
    <main>
      <NavBar />
      <Section>
        {
          (allSales.length > 0) && (
            allSales.map((sale) => (
              <CardSales key={ sale.id } sale={ sale } />
            ))
          )
        }
      </Section>
    </main>
  );
}

export default Orders;
