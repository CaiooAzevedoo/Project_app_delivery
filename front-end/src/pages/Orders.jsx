import React, { useEffect } from 'react';
import getSalesByUserId from '../Api/Sales';
import CardSales from '../components/CardSales';
import NavBar from '../components/NavBar';

function Orders() {
  const [allSales, setAllSales] = useState(initialState);

  useEffect(() => {
    const requestSeles = async () => {
      const result = await getSalesByUserId();
      setAllSales(result.data);
    };

    requestSeles();
  }, []);

  return (
    <main>
      <NavBar />
      <section>
        {
          (allSales.length > 0) && (
            allSales.map((sale) => (
              <CardSales key={ sale.id } sale={ sale } />
            ))
          )
        }
      </section>
    </main>
  );
}

export default Orders;
