import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SellerOrderCard from '../components/SellerOrdersCard';
import { getSales } from '../Api/Sales';

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
        <section>
          {(sales.length > 0) && (
            sales.map(
              (sale) => (<SellerOrderCard key={ sale.id } sale={ sale } />),
            ))}
        </section>
      </div>
    </main>
  );
}

export default SellerOrders;
