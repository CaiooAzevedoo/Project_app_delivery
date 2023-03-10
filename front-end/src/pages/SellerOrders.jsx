import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SellerOrderCard from '../components/SellerOrdersCard';
import { getSales } from '../Api/Sales';
import Section from './styles/SellerOrdersStyle';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const request = async () => {
      const { data } = await getSales();
      console.log(data, 'PROBLEMA PAGINA');
      setSales((data) || []);
    };

    request();
  }, []);
  return (
    <main>
      <div>
        <NavBar />
        <Section>
          {(sales.length > 0) && (
            sales.map(
              (sale) => (<SellerOrderCard key={ sale.id } sale={ sale } />),
            ))}
        </Section>
      </div>
    </main>
  );
}

export default SellerOrders;
